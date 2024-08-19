// utils/validateUrl.js

const isValidUrl = (url) => {
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

module.exports = isValidUrl;
