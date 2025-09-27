describe('AMAZON', () => {
 it('Mobile search under particuar amount', () => {

    cy.visit('https://www.amazon.in/')
    cy.get('[name="field-keywords"]').type('mobile')
    cy.get('[value="Go"]').click()






























 })
})