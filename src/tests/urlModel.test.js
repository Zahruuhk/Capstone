const mongoose = require('mongoose');
const { Url } = require('../../src/models/urlModel');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('Url model should save and retrieve URL entries', async () => {
    const url = new Url({ originalUrl: 'https://example.com', shortenedUrl: 'https://scissor.io/abcde' });
    await url.save();

    const foundUrl = await Url.findOne({ originalUrl: 'https://example.com' });
    expect(foundUrl).toBeTruthy();
});
