let employeePage = {}

let editTest = require('../testAssests/editTest')

let employeeList = require('../testAssests/validEmployees')

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

var addEmployee = (functionPage, nameEntry, phoneEntry, titleEntry) => {
    functionPage
        clickByText(employeePage, ' + Add Employee ')
        clickByText(employeePage, 'New Employee')
            /*employeePage.click('li[name="employee11"]')*/
            employeePage.clearValue('@nameField')
            .setValue('@nameField', nameEntry)
            .clearValue('@phoneField')
            .setValue('@phoneField', phoneEntry)
            .clearValue('@titleField')
            .setValue('@titleField', titleEntry)
            .click('@saveButton')
            .expect.element('@employeeName').text.to.equal(nameEntry)
        clickByText(employeePage, 'Lou White')
           employeePage
            .expect.element('@employeeName').text.to.equal('Lou White')
        clickByText(employeePage, nameEntry)
            employeePage
            .expect.element('@employeeName').text.to.equal(nameEntry)
}

module.exports = {
    beforeEach: browser=> {
        employeePage = browser.page.employeePage()
        employeePage.navigate()
            .expect.element('@addEmployee').to.be.visible.before(10000)
    },
    after: browser=> {
        browser.end()
        //link to Test Plan https://dmutah.atlassian.net/browse/QO2C-51
    },
    // 'Add Employee, Valid' : browser => {
    //     //T E S T C A S E
    //     addEmployee(employeePage, 'Darth Vader', '8018300551', 'Sith Lord')
    //     addEmployee(employeePage, 'Luke Skywalker', '3855684567', 'Jedi Knight')
    //     addEmployee(employeePage, 'Alex Hatch', '3857894561', 'Wife')
    //     addEmployee(employeePage, 'Titus', '3850000000', 'Dingus Dog')
    // },
    // 'It can add a new employee': browser => {
    //     employeePage.click('@addEmployee')
    //         .api.acceptAlert()
    //     editTest(employeePage, 'New Employee', {name: 'Hank Hill', phone: '0000000000', title: 'Propane Salesman'}, 'Han Solo')
    // },
    // 'It can edit an existing employee': browser => {
    // editTest(employeePage, 'Hank Hill', {name: 'Dollie Berry', phone: '2222222222', title: 'Master and Commander'}, 'Chewbacca')
        
    // },
    'Add a bunch of employees': brower => {
        employeeList.forEach(employee => {
            employeePage.click('@addEmployee').api.acceptAlert()
            editTest(employeePage, 'New Employee', employee, 'Luke Skywalker')
        })
    }
}


// let manager = {}

// let editTest = require('../testAssests/editTest')

// module.exports = {
//     beforeEach: browser => {
//         manager = browser.page.employeePage()
//         manager.navigate()
//             .expect.element('@versionNumber').text.to.equal('Version 1.2')
//     },
//     after: browser => {
//         browser.end()
//     },
//     // 'It can add an employee': browser => {
//     //     manager
//     //         .click('@addButton')
//     //         .clickEmployee('New Employee')
//     //         .expect.element('@cardTitle').text.to.equal('New Employee')
//     // },
//     'It can edit a new employee': browser => {
//         manager
//             .click('@addButton')
//         editTest(manager, 'New Employee', {name: 'Hank Hill', phone: '0000000000', title: 'Propane Salesman'}, 'Dollie Berry')

//     },
//     'It can edit an existing employee': browser => {
//         editTest(manager, 'Dollie Berry', {name: 'Dollie Berry', phone: '2222222222', title: 'Master and Commander'}, 'Bernice Ortiz')

//     }
// }