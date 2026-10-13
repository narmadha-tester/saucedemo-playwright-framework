import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { USERS } from '../test-data/users';

test('Add a product to cart and verify it', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );

  await inventoryPage.expectPageLoaded();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.expectCartCount('1');

  await cartPage.navigate();
  await cartPage.expectCartItemCount(1);
});