import { type Page, expect } from '@playwright/test';

export async function loginAsStandardUser(page: Page) {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

  await expect(page).toHaveURL(/inventory\.html/);
}