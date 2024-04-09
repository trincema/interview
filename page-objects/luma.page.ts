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

    /**
     * It seems 'Consent' dialog does not appear consistently every time.
     * For example, in the pipeline the test fails with a timeout waiting for the dialog.
     * A flexible mechanism has to be implemented here to deal with this behaviour.
    */
    public async useDataConsent() {
        //const consent = await this.page.getByLabel('Consent', { exact: true });
        //await this.click(consent);
    }

    public async click(element: Locator) {
        await expect(element).toBeVisible();
        await element.scrollIntoViewIfNeeded();
        await element.click();
    }

}
