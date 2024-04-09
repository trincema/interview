import { Page } from "@playwright/test";
import { LumaPage } from "./luma.page";

export class CartPage extends LumaPage {
    
    constructor(page: Page) {
        super(page);
    }
}
