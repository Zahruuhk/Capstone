// controllers/qrCodeController.js

const QRCode = require('qrcode');

const generateQRCode = async (req, res) => {
    const { url } = req.body;

    try {
        const qrCodeData = await QRCode.toDataURL(url);
        res.status(200).json({ qrCodeData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
};

module.exports = {
    generateQRCode,
};
