describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(()=>{
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {

    cy.get('#firstName')
    .as('firstName')
    .should('be.visible')
    .type('daniel')

    cy.get('#firstName')
    .should('have.value', 'daniel')


    cy.get('#lastName')
    .as('lastName')
    .should('be.visible')
    .type('rodrigues')

    cy.get('#lastName')
    .should('have.value', 'rodrigues')


    cy.get('#email')
    .as('email')
    .should('be.visible')
    .type('daniel@teste.com.br')

    cy.get('#email')
    .should('have.value', 'daniel@teste.com.br')


    cy.get('#open-text-area')
    .as('open-text-area')
    .should('be.visible')
    .type('teste texto')

    cy.get('#open-text-area')
    .should('have.value', 'teste texto')


    cy.get('.button').click()


    cy.get('.success')    
    .should('be.visible')


  })
})