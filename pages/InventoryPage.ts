import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products', { exact: true });
    this.inventoryItems = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButtons = page.getByRole('button', {
      name: 'Add to cart',
    });
  }

  async expectPageLoaded() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.pageTitle).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async expectCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }
}