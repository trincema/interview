import { test } from '@playwright/test';
import { DataFactory } from '../test-data/data.factory';
import { Color, ProductPage, Size } from '../page-objects/product.page';
import { HeaderPage } from '../page-objects/header.page';

test.describe('Product Page Suite', () => {
  test('As a Customer, I want to add a product to the Cart', async ({ page} ) => {
    // Test Case Data
    const productPageUrl = DataFactory.productPageUrl();
    const size = Size.XS;
    const color = Color.Blue;
    const price = '$22.00';

    const productPage = new ProductPage(page);
    await productPage.openHomepage(productPageUrl);
    await productPage.useDataConsent();
    await productPage.checkProductDetails();
    await productPage.selectSize(size);
    await productPage.selectColor(color);
    await productPage.addToCart();
    await productPage.waitUntilArticleIsAddedToCart();

    const headerPage = new HeaderPage(page);
    await headerPage.openCart();
    await headerPage.expandSeeDetails()
    await headerPage.checkCartItem(size, color, price);
  });
});