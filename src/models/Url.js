// models/Url.js
const mongoose = require('mongoose');

// Define the URL schema
const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true,
    },
    shortenedUrl: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the model
const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
