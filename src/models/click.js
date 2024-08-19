const mongoose = require('mongoose');

// Define the Click schema
const clickSchema = new mongoose.Schema({
    urlId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Url',
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
    },
});

// Create and export the model
const Click = mongoose.model('Click', clickSchema);
module.exports = Click;
