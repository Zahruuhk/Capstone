const request = require('supertest');
const app = require('../../src/app');

test('POST /api/urls should create a new URL', async () => {
    const response = await request(app)
        .post('/api/urls')
        .send({ originalUrl: 'https://example.com' })
        .expect(201);

    expect(response.body.shortenedUrl).toBeTruthy();
});
