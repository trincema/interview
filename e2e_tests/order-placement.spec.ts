import { test } from '@playwright/test';
import { DataFactory } from '../test-data/data.factory';
import { Color, ProductPage, Size } from '../page-objects/product.page';
import { HeaderPage } from '../page-objects/header.page';
import { ShippingMethod, ShippingPage } from '../page-objects/shipping.page';

test.describe('Order Placement Suite', () => {
  test('As a Customer, I want to place an order', async ({ page} ) => {
    // Test Case Data
    const productPageUrl = DataFactory.productPageUrl();
    const size = Size.XS;
    const color = Color.Blue;
    const price = '$22.00';

    const productPage = new ProductPage(page);
    await productPage.openHomepage(productPageUrl);
    await productPage.useDataConsent();
    await productPage.selectSize(size);
    await productPage.selectColor(color);
    await productPage.addToCart();
    await productPage.waitUntilArticleIsAddedToCart();

    const headerPage = new HeaderPage(page);
    await headerPage.openCart();
    await headerPage.proceedToCheckout();

    const shippingPage = new ShippingPage(page);
    await shippingPage.setEmail('test.email@gmail.com');
    await shippingPage.setFirstName('FirstName');
    await shippingPage.setLastName('LastName');
    await shippingPage.setCompany('Company');
    await shippingPage.streetAddressLine1('Address 1');
    await shippingPage.setCity('Manhattan');
    await shippingPage.setStateProvince('1');
    await shippingPage.setPostalCode('12345');
    await shippingPage.setPhoneNumber('+40748892014');
    await shippingPage.setShippingMethod(ShippingMethod.Mixed);
    
    await shippingPage.goToReviewPaymentsPage();
    await shippingPage.placeOrder();
    await shippingPage.checkOrderPlacedMessage();
  });
});