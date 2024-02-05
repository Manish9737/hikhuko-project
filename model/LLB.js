const mongoose = require('mongoose');

const llbSchema = new mongoose.Schema({
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
const LLB = mongoose.model('LLB', llbSchema);

// Export the model
module.exports = LLB;
