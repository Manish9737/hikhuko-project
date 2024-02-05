var express = require("express");
var router = express.Router();
const Stream = require("../model/Stream");
const BAF = require("../model/BAF");
const BAIB = require("../model/BAIB");
const BALLB = require("../model/BA_LLB");
const BBA = require("../model/BBA");
const BCA = require("../model/BCA");
const BCOM = require("../model/BCOM");
const BDesc = require("../model/BDesc");
const BOBM = require("../model/BOBM");
const BOE = require("../model/BOE");
const BScIT = require("../model/BScIT");
const CAMA = require("../model/CAMA");
const LLB = require("../model/LLB");
const MAC = require("../model/MAC");
const MACIF = require("../model/MACIF");
const { mongoose } = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const streams = await Stream.find()
      .populate("BAF")
      .populate("BA_in_Biology")
      .populate("BALLB")
      .populate("BBA")
      .populate("BCA")
      .populate("BCOM")
      .populate("B_Desc")
      .populate("Bachelor_of_Business_Management")
      .populate("Bachelor_of_Economics")
      .populate("BScIT")
      .populate("Cost_and_Management_Accountant")
      .populate("LLB")
      .populate("Mass_and_Communication_in_Film")
      .populate("Mass_and_Communication")
      .exec();

    return res.status(200).json(streams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/add", async (res, req, next) => {
  res.send("Entering the Streams...");
});

// POST endpoint to add a reference ObjectId to the BCA array in the Stream collection
router.post("/addBCARef", async (req, res) => {
  try {
    // Get the ObjectId of the BCA document to be referenced
    const { bcaObjectId } = req.body;

    // Find the Stream document
    const stream = await Stream.findOne();

    // Push the BCA ObjectId to the BCA array in the Stream document
    stream.BCA.push(bcaObjectId);

    // Save the updated Stream document
    await stream.save();

    // Send a success response
    return res
      .status(200)
      .json({ message: "BCA reference added successfully" });
  } catch (error) {
    console.error(error);
    // Send an error response
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/check-and-add", async (req, res) => {
  try {
    // Retrieve all MAC IDs from the MAC collection
    const allMACIds = await MAC.find({}, "_id");

    // Retrieve all MAC IDs from the Streams Mass_and_Communication array
    const streamsMAC = await Stream.findOne({}, "Mass_and_Communication").lean();

    // Extract MAC IDs from the Streams Mass_and_Communication array
    const streamsMACIds = streamsMAC.Mass_and_Communication.map((id) => id.toString());

    // Find missing MAC IDs
    const missingMACIds = allMACIds
      .filter(({ _id }) => !streamsMACIds.includes(_id.toString()))
      .map(({ _id }) => _id);

    // Add missing MAC IDs to the Streams Mass_and_Communication array
    if (missingMACIds.length > 0) {
      await Stream.updateOne({}, { $push: { Mass_and_Communication: { $each: missingMACIds } } });
    }

    res
      .status(200)
      .json({
        message: "MAC IDs checked and added successfully",
        missingMACIds,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
