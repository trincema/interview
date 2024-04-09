import { Page, expect } from "@playwright/test";
import { LumaPage } from "./luma.page";

export enum ShippingMethod {
    Mixed,
    TableRate
}

export class ShippingPage extends LumaPage {
    constructor(page: Page) {
        super(page);
    }
    
    /**
     * 
    */
    public async setEmail(email: string) {
        await this.page.getByRole('textbox', { name: 'Email Address *' }).fill(email);
    }

    public async setFirstName(firstName: string) {
        await this.page.getByLabel('First Name').fill(firstName);
    }

    public async setLastName(lastName: string) {
        await this.page.getByLabel('Last Name').fill(lastName);
    }

    public async setCompany(company: string) {
        await this.page.getByLabel('Company').fill(company);
    }

    public async streetAddressLine1(address1: string) {
        await this.page.getByLabel('Street Address: Line 1').fill(address1);
    }

    public async streetAddressLine2(address2: string) {
        await this.page.getByLabel('Street Address: Line 2').fill(address2);
    }

    public async streetAddressLine3(address3: string) {
        await this.page.getByLabel('Street Address: Line 3').fill(address3);
    }

    public async setCity(city: string) {
        await this.page.getByLabel('City').fill(city);
    }

    public async setStateProvince(stateProvinceIndex: string) {
        await this.page.locator('select[name="region_id"]').selectOption(stateProvinceIndex);
    }

    public async setPostalCode(postalCode: string) {
        await this.page.getByLabel('Zip/Postal Code').fill(postalCode);
    }

    public async setPhoneNumber(phone: string) {
        const phoneNb = await this.page.getByLabel('Phone Number');
        await super.click(phoneNb);
        await phoneNb.fill(phone);
    }

    public async setShippingMethod(shippingMethod: ShippingMethod) {
        switch (shippingMethod) {
            case ShippingMethod.Mixed:
                await this.page.getByLabel('Fixed').check();
                break;
            case ShippingMethod.TableRate:
                await this.page.getByLabel('Table Rate').check();
                break;
            default:
                await this.page.getByLabel('Fixed').check();
                break;
        }
        
    }

    public async goToReviewPaymentsPage() {
        const nextButton = await this.page.getByRole('button', { name: 'Next' });
        await super.click(nextButton);
    }

    /**
     * Click 'Place Order' button.
    */
    public async placeOrder() {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }

    /**
     * 
    */
    public async checkOrderPlacedMessage() {
        const orderlacedMessage = await this.page.getByText('Thank you for your purchase!');
        await expect(orderlacedMessage).toBeVisible();
    }
}
