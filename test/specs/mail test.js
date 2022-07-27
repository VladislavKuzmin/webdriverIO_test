const MainPage = require('../pageobjects/main.page')
const MailPage = require('../pageobjects/mail page')

const username = 'test123456789te5t';
const password = 'AOaTUo)iea12';

describe('mail tests', () => {
    it('should login with valid credentials', async () => {
        MainPage.open();

        await MainPage.pressLoginBtn();
        await MainPage.switchToLoginIFrame();
        await MainPage.typeUsername(username);
        await MainPage.pressNextBtn();
        await MainPage.typePassword(password);
        await MainPage.pressSubmitButton();

        expect ($('a[title="Написать письмо"]')).toBeExisting();
    })

});

