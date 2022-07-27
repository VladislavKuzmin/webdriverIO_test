module.exports = class Page {
    open (path) {
        return browser.url(`https://mail.ru/${path}`)
    }

    click (locator){
        this.click(locator);
    }

    pause(milliseconds){
        driver.pause(milliseconds);
    }

    switchToFrame(locator){
        driver.switchToFrame(locator);
    }
}
