import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS } from '../test-data/users';

test('User can log out successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Login with valid credentials
  await loginPage.navigate();
  await loginPage.login(
    USERS.standard.username,
    USERS.standard.password
  );

  // Verify successful login
  await expect(page).toHaveURL(/inventory\.html/);

  // Open the navigation menu
  await page.getByRole('button', { name: 'Open Menu' }).click();

  // Click Logout using SauceDemo's stable test ID
  const logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  await expect(logoutLink).toBeVisible({ timeout: 10000 });
  await logoutLink.click();

  // Verify return to the login page
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);
});