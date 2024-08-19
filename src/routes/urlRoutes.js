// routes/urlRoutes.js
const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// Route to shorten a URL
router.post('/shorten', urlController.shortenUrl);

// Route to retrieve original URL from short URL
router.get('/:shortId', urlController.getOriginalUrl);

module.exports = router;
