module.exports = {

    'Demo test Google' : function (browser) {
        browser
        .url('https://github.com/mozilla/geckodriver/releases/tag/v0.24.0')
        .pause(1000);

        browser.expect.element('body').to.be.present.before(500);
        browser.expect.element('h3').to.have.css('font-size');
        browser.expect.element('body').to.have.attribute('class').which.contains('vasq');
        browser.expect.element('#lst-ib').to.be.an('input');
        browser.expect.element('#lst-ib').to.be.visible;

        browser.end();

    }
};