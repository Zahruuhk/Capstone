const urlService = require('../../src/services/urlService');

test('urlService.shortenUrl should generate a valid shortened URL', () => {
    const originalUrl = 'https://example.com';
    const shortenedUrl = urlService.shortenUrl(originalUrl);

    expect(shortenedUrl).toMatch(/^https:\/\/scissor\.io\/[a-z0-9]{5}$/);
});
