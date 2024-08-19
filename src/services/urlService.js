const Url = require('../models/Url');
const shortid = require('shortid');

// Create a new URL document
const shortenUrl = async (originalUrl) => {
    const shortenedUrl = shortid.generate();
    const newUrl = new Url({ original: originalUrl, shortened: shortenedUrl });
    await newUrl.save();
    return newUrl;
};

// Find original URL by shortened URL
const getOriginalUrl = async (shortenedUrl) => {
    const url = await Url.findOne({ shortened: shortenedUrl });
    if (!url) throw new Error('URL not found');
    return url.original;
};

module.exports = {
    shortenUrl,
    getOriginalUrl,
};
