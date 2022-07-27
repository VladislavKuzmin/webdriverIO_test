const Page = require('./page');

class MainPage extends Page {

    get btnLogin () { return $('button[data-testid="enter-mail-primary"]'); }

    get inputUsername () { return $('input[name="username"]'); }

    get inputPassword () { return $('input[name="password"]'); }

    get btnSubmit(){ return $('button[data-test-id="submit-button"]'); }

    get frameLogin(){ return $('iframe[class="ag-popup__frame__layout__iframe"]'); }

    get btnNext(){ return $('button[data-test-id="next-button"]'); }

    get inputSearch() { return $('input[data-testid="search-input"]'); }

    get btnSearch() { return $('button[data-testid="search-button"]'); }


    async pressLoginBtn(){
        await this.btnLogin.click();
    }

    async switchToLoginIFrame(){
        let elem = await this.frameLogin;
        await this.pause(10000);
        await driver.switchToFrame(elem);
    }

    async typeUsername(username){
        await this.inputUsername.setValue(username);
    }

    async pressNextBtn(){
        await this.btnNext.click();
    }

    async typePassword(password){
        await this.inputPassword.setValue(password);
    }

    async pressSubmitButton(){
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    // async login (username, password) {
    //     await this.btnLogin.click();
    //     await this.frameLogin.waitForExist();
    //     await this.switchToFrame(this.frameLogin);
    //     await this.inputUsername.setValue(username);
    //     await this.btnNext.waitForExist();
    //     await this.btnNext.click();
    // }

    async search(text){
        await this.inputSearch.setValue(text);
        await this.btnSearch.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
