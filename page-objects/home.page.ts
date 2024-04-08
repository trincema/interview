import { LumaPage } from "./luma.page";
import { expect, type Page } from '@playwright/test';

export class HomePage extends LumaPage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * 
    */
    public async selectProduct(productName: string) {
        const product = await this.page.getByRole('link', { name: productName }).first();
        await super.click(product);
    }

}
