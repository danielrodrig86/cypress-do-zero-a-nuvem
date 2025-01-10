describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(()=>{
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('Exercício - preenche os campos obrigatórios e envia o formulário', () => {

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
  it('Exercício extra 1 - preenche os campos options', () => {

    cy.wait(2000)

    cy.get('#product')
    .as('product')
    .should('be.visible')
    .type('Cursos')

  })
  it('Exercício extra 2 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('#email')
    .as('email')
    .should('be.visible')
    .type('DanielRodrigues')

    cy.get('.error').closest('.error')

  })
  it('Exercício extra 4 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

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

    cy.get('#phone-checkbox')
    .as('phone-checkbox')
    .check()

    cy.get('#open-text-area')
    .as('open-text-area')
    .should('be.visible')
    .type('teste texto')

    cy.get('#open-text-area')
    .should('have.value', 'teste texto')

    cy.get('.button').click()
    cy.get('.error').closest('.error')

  })
  it('Exercício extra 5 - preenche e limpa os campos nome, sobrenome, email e telefone', () => {

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

    cy.get('#phone')
    .as('phone')
    .should('be.visible')
    .type('999999999')

    cy.get('#phone')
    .should('have.value', '999999999')

    cy.get('#open-text-area')
    .as('open-text-area')
    .should('be.visible')
    .type('teste texto')

    cy.get('#open-text-area')
    .should('have.value', 'teste texto')

    cy.get('.button').click()

    cy.wait(3500)

    cy.get('#firstName')
    .as('firstName')
    .clear().should('have.value', '')

    cy.get('#lastName')
    .as('lastName')
    .clear().should('have.value', '')

    cy.get('#email')
    .as('email')
    .clear().should('have.value', '')

    cy.get('#phone')
    .as('phone')
    .clear().should('have.value', '')

  })
  it('Exercício extra 6 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.get('.button').click()
    cy.get('.error').closest('.error')

  })
  it('Exercício extra 3 - telefone com valor não-numérico digitado', () => {

  })
  it('Exercício extra 7 - envia o formuário com sucesso usando um comando customizado', () => {

  })
  it('Exercício extra 8 - outra forma de identificar elementos', () => {

  })
  
})