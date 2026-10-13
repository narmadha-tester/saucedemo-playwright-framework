import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { USERS } from '../test-data/users';
import { TEST_DATA } from '../config/test-data';

test('Complete checkout successfully', async ({ page }) => {
const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);

await loginPage.navigate();
await loginPage.login(
USERS.standard.username,
USERS.standard.password
);

await inventoryPage.expectPageLoaded();
await inventoryPage.addFirstProductToCart();

await cartPage.navigate();
await cartPage.expectCartItemCount(1);
await cartPage.proceedToCheckout();

await checkoutPage.enterCustomerDetails(
TEST_DATA.checkout.firstName,
TEST_DATA.checkout.lastName,
TEST_DATA.checkout.postalCode
);

await checkoutPage.expectCheckoutOverview();
await checkoutPage.finishOrder();
await checkoutPage.expectOrderConfirmation();
});