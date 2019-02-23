var employeePage = {}

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

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
    'Save Button': browser => {
        //https://dmutah.atlassian.net/browse/QO2C-54
        employeePage
        clickByText(employeePage, 'Bernice Ortiz')
            employeePage.clearValue('@nameEntry')
            .setValue('@nameEntry', 'Obi-Wan')
            .click('@saveButton')
            .expect.element('@employeeName').text.to.equal('Obi-Wan')
        clickByText(employeePage, 'Marnie Barnett')
        clickByText(employeePage, 'Obi-Wan')
            employeePage.expect.element('@employeeName').text.to.equal('Obi-Wan')
    },
    'Cancel Button': browser => {
        //https://dmutah.atlassian.net/browse/QO2C-55
        employeePage
        clickByText(employeePage, 'Bernice Ortiz')
            employeePage.setValue('@nameEntry', 'Obi-Wan')
            .click('@cancelButton')
            .expect.element('@nameEntry').text.to.not.equal('Obi-Wan')
    },
    'Saving Invalid Data' : browser => {
        //https://dmutah.atlassian.net/browse/QO2C-65
        employeePage
        clickByText(employeePage, 'Bernice Ortiz')
            employeePage.clearValue('@nameEntry')
            .setValue('@nameEntry', 'ohnoisaidsteamedhamsthatswhaticallhamburgers')
            .click('@saveButton')
            .expect.element('@error').to.be.present
            employeePage.expect.element('@employeeName').text.to.equal('Bernice Ortiz')


    }
}