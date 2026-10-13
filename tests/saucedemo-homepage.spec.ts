import { test, expect } from '@playwright/test';

test('SauceDemo homepage title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});