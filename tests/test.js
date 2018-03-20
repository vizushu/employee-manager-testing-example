const didEmployeeLoad = require('../test-assets/didEmployeeLoad')

module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.1_Version/index.html")
    },
    after: browser => {
        browser.end()
    },
    "Do employees load when clicked?": browser => {
        didEmployeeLoad(browser, [
            { name: 'Bernice Ortiz', id: '1', phone: '4824931093', title: 'CEO' },
            { name: "Phillip Weaver", id: '3', phone: '7459831843', title: 'Manager' } ])
    },
    'Did app load with expected elements' : browser => {
        browser
            .waitForElementVisible('span[class="titleText"]', 3000)
            .waitForElementVisible('body', 3000)
    }
}