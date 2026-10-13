import { test, expect } from '@playwright/test';

test('SauceDemo homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(
    page.getByPlaceholder('Username')
  ).toBeVisible();
});