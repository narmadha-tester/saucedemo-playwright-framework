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
  test('should mock a network response using route', async ({ page }) => {
    await page.route('https://www.saucedemo.com/', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<html><body><h1>Mocked SauceDemo Page</h1></body></html>',
      });
    });

    await page.goto('https://www.saucedemo.com/');

    await expect(
      page.getByRole('heading', { name: 'Mocked SauceDemo Page' })
    ).toBeVisible();
  });
});
