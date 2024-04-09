import { Page, expect } from "@playwright/test";
import { LumaPage } from "./luma.page";
import { Color, ProductPage, Size } from '../page-objects/product.page';

export class HeaderPage extends LumaPage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Click Cart link to open Cart popup.
    */
    public async openCart() {
        const cart = await this.page.getByRole('link', { name: ' My Cart 1 1\nitems' })
        await super.click(cart);
    }

    /**
     * Click Dee Details of item inside Cart.
     * This will expand 'Size' and 'Color' attributes.
    */
    public async expandSeeDetails() {
        const seeDetails = await this.page.getByText('See Details');
        await expect(seeDetails).toBeVisible();
        await super.click(seeDetails);
    }

    /**
     * Click 'Proceed to Checkout' button.
    */
    public async proceedToCheckout() {
        const proceedToCheckoutButton = await this.page.getByRole('button', { name: 'Proceed to Checkout' });
        await super.click(proceedToCheckoutButton);
    }

    /**
     * 
    */
    public async checkCartItem(size: Size, color: Color, price: string) {
        const productImage = await this.page.getByTitle('Radiant Tee');
        await expect(productImage).toBeVisible();
        const productName = await this.page.locator('#mini-cart').getByText('Radiant Tee');
        await expect(productName).toBeVisible();
        
        const sizeLabel = await this.page.locator('#mini-cart').getByText('Size');
        await expect(sizeLabel).toBeVisible();
        const sizeValue = await this.page.locator('#mini-cart').locator('span').getByText(size.toString());
        await expect(sizeValue).toBeVisible();
        const colorLabel = await this.page.locator('#mini-cart').getByText('Color');
        await expect(colorLabel).toBeVisible();
        const colorValue = await this.page.locator('#mini-cart').locator('span').getByText(color.toString());
        await expect(colorValue).toBeVisible();
        const priceValue = await this.page.locator('#mini-cart').getByText(price);
        await expect(priceValue).toBeVisible();

        console.log('Cart Item successfully checked');
    }
}
