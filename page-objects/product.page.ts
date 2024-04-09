import { Page, expect } from "@playwright/test";
import { LumaPage } from "./luma.page";

export enum Size {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = 'XL'
}

export enum Color {
    Blue = 'Blue',
    Orange = 'Orange',
    Purple = 'Purple'
}

export class ProductPage extends LumaPage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * 
    */
    public async checkProductDetails() {
        const header = await this.page.getByRole('heading', { name: 'Radiant Tee' }).locator('span');
        await expect(header).toBeVisible();
    }
    
    /**
     * Select product size on product page.
    */
    public async selectSize(size: Size) {
        const sizeLabel = await this.page.getByLabel(size.toString());
        await super.click(sizeLabel);
        await expect(sizeLabel).toHaveAttribute('aria-checked', 'true');
        let value = await sizeLabel.getAttribute('aria-checked');
        console.log('sizeLabel: ' + value);
    }

    /**
     * Select product color on product page.
    */
    public async selectColor(color: Color) {
        let colorLabel = await this.page.getByLabel(color.toString());
        await super.click(colorLabel);
        await expect(colorLabel).toHaveAttribute('aria-checked', 'true');
        let value = await colorLabel.getAttribute('aria-checked');
        console.log('colorLabel: ' + value);
    }

    public async setQuantity(quantity: number) {
        await this.page.locator('input[name="qty"]').fill(quantity.toString());
    }

    public async checkQuantityErrorMessage(errorMessage: string) {
        const error = await this.page.getByText(errorMessage);
        await expect(error).toBeVisible();
    }

    /**
     * Click 'Add to Cart' button.
    */
    public async addToCart() {
        let addToCartButton = await this.page.getByRole('button', { name: 'Add to Cart' }).first();
        await super.click(addToCartButton);
        console.log('Add to Cart button clicked');
    }

    /**
     * Wait until the article is added to Cart after pressing 'Add to Cart' button.
     * The status of the adding process is imprinted on the 'Add to Cart' button itself.
     * 1st we will see the message 'Adding...'
     * 2nd we will see the message 'Added'
     * 3rd we will see back again the initial 'Add to Cart' button label.
     * We have to wait and assert for all these 3 button statuses to make sure the article is added to cart.
    */
    public async waitUntilArticleIsAddedToCart() {
        await this.page.getByRole('button', { name: 'Adding...' }).first();
        await this.page.getByRole('button', { name: 'Added' }).first();
        await this.page.getByRole('button', { name: 'Add to Cart' }).first();
        console.log("Article should be now added to the cart");
    }
}
