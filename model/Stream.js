const mongoose = require("mongoose");
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

const streamSchema = new mongoose.Schema({
  BAF: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BAF' }],
  BA_in_Biology: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BAIB' }],
  BALLB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BALLB' }],
  BBA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BBA' }],
  BCA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BCA' }],
  BCOM: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BCOM' }],
  B_Desc: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BDesc' }],
  Bachelor_of_Business_Management: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BOBM' }],
  Bachelor_of_Economics : [{ type: mongoose.Schema.Types.ObjectId, ref: 'BOE' }],
  BScIT: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BScIT' }],
  Cost_and_Management_Accountant: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CAMA' }],
  LLB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LLB' }],
  Mass_and_Communication_in_Film: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MACIF' }],
  Mass_and_Communication: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MAC' }],
});

const Stream = mongoose.model("Stream", streamSchema);
module.exports = Stream;
