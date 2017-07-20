const {by, element, browser} = require('protractor');

class WelcomePageObject {

    constructor() {
        this.welcome = element(by.id('welcome'));
    }

    go() {
        browser.ignoreSynchronization = true;
        browser.get('/');
    }
}

module.exports = new WelcomePageObject();