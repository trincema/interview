export class DataFactory {
    /**
     * Create and return App Url based on staging environment.
     * (Well, in this case we only have one stage to test).
    */
    public static createAppUrl(staging: string = '') {
        return 'https://magento.softwaretestingboard.com/';
    }

    /**
     * 
    */
    public static productPageUrl(staging: string = '') {
        return 'https://magento.softwaretestingboard.com/radiant-tee.html';
    }
}

export default new DataFactory();