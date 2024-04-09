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

  test('As a Customer, I want to add between 1 and 10.000 products to Cart', async ({ page} ) => {
    // Test Case Analysis and Design: test_design/PRODUCT-PAGE.md

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

    // Invalid Partition 1 Boundary Value (0)
    await productPage.setQuantity(0);
    await productPage.addToCart();
    await productPage.checkQuantityErrorMessage('Please enter a quantity greater than 0');

    // Invalid Partition 3 Boundary Value (10.001)
    await productPage.setQuantity(10001);
    await productPage.addToCart();
    await productPage.checkQuantityErrorMessage('The maximum you may purchase is 10000.');
    
    // Valid Partition 2 Boundary Values (1 and 10.000)
    await productPage.setQuantity(1);
    await productPage.addToCart();
    await productPage.waitUntilArticleIsAddedToCart();
    //await productPage.setQuantity(10000);
    //await productPage.addToCart();
    //await productPage.waitUntilArticleIsAddedToCart();
  });
});