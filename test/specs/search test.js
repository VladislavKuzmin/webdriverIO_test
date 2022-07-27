const MainPage = require('../pageobjects/main.page')

describe('Mail.ru search tests', () => {
    it('should search', async () => {
        MainPage.open();
        await MainPage.search('Baby Pizza')
        expect($('a[class="SearchLogoLink-logoLink"]').toBePresent());
    });
});

