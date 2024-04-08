import { Locator, expect, type Page } from '@playwright/test';

export class LumaPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Open App Home Page based on staging URL.
     * Tests could run on multiple staging environments using this generic approach.
    */
    public async openHomepage(url: string) {
        await this.page.goto(url);
    }

    public async useDataConsent() {
        await this.page.getByLabel('Consent', { exact: true }).click();
    }

    public async click(element: Locator) {
        await expect(element).toBeVisible();
        await element.scrollIntoViewIfNeeded();
        await element.click();
    }

}
