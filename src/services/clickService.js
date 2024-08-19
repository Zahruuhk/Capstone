const Click = require('../models/Click');

// Record a new click
const trackClick = async (data) => {
    const newClick = new Click(data);
    await newClick.save();
};

module.exports = {
    trackClick,
};
