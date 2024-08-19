// src/config/config.js
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    BASE_URL: process.env.BASE_URL
};
