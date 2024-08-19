// controllers/analyticsController.js

const analyticsService = require('../services/analyticsService');

const getClickData = async (req, res) => {
    try {
        const clickData = await analyticsService.getClickData();
        res.status(200).json(clickData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve analytics data' });
    }
};

module.exports = {
    getClickData,
};
