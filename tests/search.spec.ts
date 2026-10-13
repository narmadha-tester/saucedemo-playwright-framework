import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS } from '../test-data/users';

test('Search products by product name', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );

  const productName = 'Sauce Labs Backpack';

  await page.getByText(productName, { exact: true }).click();

  await expect(
    page.getByText(productName, { exact: true })
  ).toBeVisible();

  await expect(
    page.locator('.inventory_details_price')
  ).toBeVisible();
});