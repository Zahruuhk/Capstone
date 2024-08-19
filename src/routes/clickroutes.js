const express = require('express');
const router = express.Router();
const clickController = require('../controllers/clickController');

// POST /api/clicks - Track a click
router.post('/', clickController.trackClick);

module.exports = router;
