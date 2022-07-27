const Page = require('./page');

class MailPage extends Page{
    open(path) {
        return super.open(path);
    }
    get btnSendMessage(){ $('a[title="Написать письмо"]'); }
}


module.exports = new MailPage();