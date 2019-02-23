var employeePage = {}

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

var testField = (functionPage, field, dataInvalid, dataValid) => {
    functionPage
            .click('@employee1')
            .clearValue(field)
            .setValue(field, dataInvalid)
            .click('@saveButton')
            .expect.element('@error').to.be.present
        employeePage.clearValue(field)
            .setValue(field, dataValid)
            .click('@saveButton')
}

let fieldErrors = require('../testAssests/fieldErrors')

module.exports = {
    beforeEach: browser=> {
        employeePage = browser.page.employeePage()
        employeePage.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser=> {
        browser.end()
        //link to Test Plan https://dmutah.atlassian.net/browse/QO2C-51
    },
    'Editable Fields' : browser => {
        //https://dmutah.atlassian.net/browse/QO2C-56
        // employeePage
        //     .click('@employee1')
        //     .clearValue('@nameEntry')
        //     .clearValue('@phoneEntry')
        //     .clearValue('@titleEntry')
        //     .pause(2000)
        //     .expect.element('@nameEntry').text.to.equal('')
        //     employeePage.expect.element('@phoneEntry').text.to.equal('')
        //     employeePage.expect.element('@titleEntry').text.to.equal('')
    },
    'Each Field' : browser => {
        fieldErrors(employeePage, 'Lou White', '@nameField', 'ohnoisaidsteamedhamsthatswhaticallhamburgers', 'Mario')
        fieldErrors(employeePage, 'Lou White', '@phoneField', 'ohnoisaidsteamedhamsthatswhaticallhamburgers', '0258741369')
        fieldErrors(employeePage, 'Lou White', '@titleField', 'ohnoisaidsteamedhamsthatswhaticallhamburgers', 'plumber')
        //https://dmutah.atlassian.net/browse/QO2C-67
        // testField(employeePage, '@nameEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers', 'Mario')
        // testField(employeePage, '@phoneEntry', '01234567890123456789', '9876543210')
        // testField(employeePage, '@titleEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers', 'Plumber')
        
    },
    'Error Messages': browser => {
        //https://dmutah.atlassian.net/browse/QO2C-64
    //     employeePage
    //         .click('@employee1')
    //         .setValue('@nameEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers')
    //         .setValue('@phoneEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers')
    //         .setValue('@titleEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers')
    //         .click('@saveButton')
    //         .pause(5000)
    //         employeePage.expect.element('@error').to.be.present            
    }
}