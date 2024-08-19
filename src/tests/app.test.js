const request = require('supertest');
const app = require('../src/app');

test('GET / should return a 200 status', async () => {
    const response = await request(app)
        .get('/')
        .expect(200);

    expect(response.text).toContain('Welcome to Scissor');
});
