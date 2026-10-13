import { test, expect } from '../fixtures/test-fixtures';

test('Custom fixtures load the SauceDemo inventory page', async ({
  loginPage,
  inventoryPage,
}) => {
  await loginPage.navigate();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.expectPageLoaded();

  await expect(inventoryPage.inventoryItems).toHaveCount(6);
});