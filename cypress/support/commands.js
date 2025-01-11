Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Jhowe',
    lastName: 'Silva',
    email: 'Jhowe@england.com.br',
    text: 'Thanks.'
}) =>{
    cy.get('#firstName').as('firstName').should('be.visible').type(data.firstName)
    cy.get('#lastName').as('lastName').should('be.visible').type(data.lastName)
    cy.get('#email').as('email').should('be.visible').type(data.email)
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type(data.text)
    cy.get('button[type="submit"]').click()
})