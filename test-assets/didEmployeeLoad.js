const selectors = require('./selectors')

/**
 * Checks loading an employee
 * @param {object} browser the nightwatch browser object
 * @param {array} employees the array of objects containing name, phone, id and title of an employee
 */
module.exports = (browser, employees) => {
    browser.assert.elementPresent(selectors.noEmployee)
    employees.forEach(employee => {
        browser
            .expect.element(selectors.employeeOnList(employee.id)).text.to.equal(employee.name)
        browser
            .click(selectors.employeeOnList(employee.id))
            .assert.elementNotPresent(selectors.noEmployee)
            .expect.element(selectors.employeeNameBar).text.to.equal(employee.name)
        browser
            .expect.element(selectors.employeeId).text.to.equal(`ID: ${employee.id}`)
        browser
            .assert.value(selectors.nameInput, employee.name)
            .assert.value(selectors.phoneInput, employee.phone)
            .assert.value(selectors.titleInput, employee.title)
    })
    let 

}