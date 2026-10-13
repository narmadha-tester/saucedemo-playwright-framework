import { test, expect } from '@playwright/test';

test.describe('SauceDemo API tests', () => {
test('should return a successful response from the application', async ({ request }) => {
const response = await request.get('https://www.saucedemo.com/');

expect(response.status()).toBe(200);
expect(response.ok()).toBeTruthy();

});

test('should return HTML content for the homepage', async ({ request }) => {
const response = await request.get('https://www.saucedemo.com/');

expect(response.headers()['content-type']).toContain('text/html');

});
});