import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../utils/helpers';
import { logger } from '../utils/logger';

test('Reusable login helper logs in successfully', async ({ page }) => {
  logger.info('Starting standard user login test');

  await loginAsStandardUser(page);

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  logger.info('Login test completed successfully');
});