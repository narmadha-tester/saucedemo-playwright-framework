import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { USERS } from '../test-data/users';

test('Products can be sorted by price: low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );

  await inventoryPage.expectPageLoaded();

  await page.locator('[data-test="product-sort-container"]')
    .selectOption('lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(price =>
    Number(price.replace('$', ''))
  );

  expect(numericPrices).toEqual(
    [...numericPrices].sort((a, b) => a - b)
  );
});