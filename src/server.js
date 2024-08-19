// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const urlRoutes = require('./routes/urlRoutes');
const app = express();

const { PORT, MONGO_URI } = require('./config/config');

// Ensure MONGODB_URI is properly defined
if (!MONGO_URI) {
    console.error('MONGO_URI is not defined');
    process.exit(1);
}

// Middleware
app.use(cors()); // Allows requests from any origin
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/urls', urlRoutes);

module.exports = app;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
