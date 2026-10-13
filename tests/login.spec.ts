import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS } from '../test-data/users';

test.describe('SauceDemo Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      USERS.standard.username,
      USERS.standard.password
    );

    await expect(page).toHaveURL(/inventory.html/);
    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  });

  test('Login with locked-out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      USERS.lockedOut.username,
      USERS.lockedOut.password
    );

    await loginPage.expectLoginError(
      'Sorry, this user has been locked out.'
    );
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      USERS.invalid.username,
      USERS.invalid.password
    );

    await loginPage.expectLoginError(
      'Username and password do not match any user in this service'
    );
  });
});