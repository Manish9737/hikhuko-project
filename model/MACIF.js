const mongoose = require('mongoose');

const macifSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Fees: {
        type: String,
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
const MACIF = mongoose.model('MACIF', macifSchema);

// Export the model
module.exports = MACIF;
