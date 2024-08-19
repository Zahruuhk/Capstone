// utils/generateShortUrl.js

const generateShortUrl = () => {
    return `https://scissor.io/${Math.random().toString(36).substr(2, 5)}`;
};

module.exports = generateShortUrl;
