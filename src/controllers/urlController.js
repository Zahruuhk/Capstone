// controllers/urlController.js
const shortid = require('shortid');
const Url = require('../models/Url');

// Shorten URL and save to database
exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;

    try {
        const shortId = shortid.generate();
        const shortenedUrl = `https://scissor.io/${shortId}`; // Example base URL
        const newUrl = new Url({ originalUrl, shortenedUrl });
        await newUrl.save();
        res.status(201).json({ shortenedUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve original URL based on shortId and redirect
exports.getOriginalUrl = async (req, res) => {
    const { shortId } = req.params;

    try {
        const url = await Url.findOne({ shortenedUrl: `https://scissor.io/${shortId}` });
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        res.redirect(url.originalUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
