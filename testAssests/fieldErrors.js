module.exports = (pageObject, oldEmployee, field, dataInvalid, dataValid) => {
    pageObject
        .clickEmployee(oldEmployee)
        .clearValue(field)
        .setValue(field, dataInvalid)
        .click('@saveButton')
        .expect.element('@error').to.be.present
    pageObject.clearValue(field)
        .setValue(field, dataValid)
        .click('@saveButton')
}