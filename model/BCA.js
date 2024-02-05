const mongoose = require('mongoose');

// Define the schema for the BCA college model
const bcaSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Fees: {
        type: Number,
        required: true
    },
    Placement: {
        type: String,
        required: true
    },
    Hostel: {
        type: String,
        required: true
    },
    Transportation: {
        type: String,
        required: true
    }
});

// Create the BCA college model
const BCA = mongoose.model('BCA', bcaSchema);

// Export the model
module.exports = BCA;
