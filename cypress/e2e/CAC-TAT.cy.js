describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(()=>{
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('Exercício - preenche os campos obrigatórios e envia o formulário', () => {

    cy.get('#firstName').as('firstName').should('be.visible').type('Daniel')
    cy.get('#firstName').should('have.value', 'Daniel')
    cy.get('#lastName').as('lastName').should('be.visible').type('Rodrigues')
    cy.get('#lastName').should('have.value', 'Rodrigues')
    cy.get('#email').as('email').should('be.visible').type('daniel@teste.com.br')
    cy.get('#email').should('have.value', 'daniel@teste.com.br')
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type('Obrigado')
    cy.get('#open-text-area').should('have.value', 'Obrigado')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')

  })
  it('Exercício extra 1 - preenche os campos options', () => {

    const longText = Cypress._.repeat('abcdefghijklmnopqrstuxywz',10)  
    cy.get('#firstName').as('firstName').should('be.visible').type('Daniel')
    cy.get('#lastName').as('lastName').should('be.visible').type('Rodrigues')
    cy.get('#email').as('email').should('be.visible').type('daniel@teste.com.br')
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type(longText,{delay : 0})
    cy.get('button[type="submit"]').click()
  })



  it('Exercício extra 2 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    const longText = Cypress._.repeat('QA',30)  
    cy.get('#firstName').as('firstName').should('be.visible').type('Daniel')
    cy.get('#lastName').as('lastName').should('be.visible').type('Rodrigues')
    cy.get('#email').as('email').should('be.visible').type('daniel@teste.com,br')
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type(longText,{delay : 0})
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })
  it('Exercício extra 3 - telefone com valor não-numérico digitado', () => {

    cy.get('#phone').as('phone').type('abcde')
    
    .should('have.value', '')

  })
  it('Exercício extra 4 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    const longText = Cypress._.repeat('SCRUM',20)  
    cy.get('#firstName').as('firstName').should('be.visible').type('daniel')
    cy.get('#lastName').as('lastName').should('be.visible').type('rodrigues')
    cy.get('#email').as('email').should('be.visible').type('daniel@teste.com.br')
    cy.get('#phone-checkbox').as('phone-checkbox').click()
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type(longText,{delay : 0})
    cy.get('button[type="submit"]').click()
    
    cy.get('.error').should('be.visible')

  })
  it('Exercício extra 5 - preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName').as('firstName').type('daniel').should('have.value', 'daniel')
    .clear().should('have.value', '')
    cy.get('#lastName').as('lastName').type('rodrigues').should('have.value', 'rodrigues')
    .clear().should('have.value', '')
    cy.get('#email').as('email').type('daniel@teste.com.br').should('have.value', 'daniel@teste.com.br')
    .clear().should('have.value', '')
    cy.get('#phone').as('phone').type('999999999')
    .clear().should('have.value', '')
    cy.get('#open-text-area').as('open-text-area').should('be.visible').type('teste texto')
    .clear().should('have.value', '')
    
  })
  it('Exercício extra 6 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })
  it('Exercício extra 7 - envia o formuário com sucesso usando um comando customizado', () => {

//    const data = {
//      firstName: 'Angelita',
//      lastName: 'Jose',
//      email: 'angela@teste.com.br',
//      text: 'Valeu.'
//    }

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')

  })
  it('Exercício extra 8 - outra forma de identificar elementos', () => {

    cy.contains('Nome').type('daniel')
    cy.contains('Sobrenome').type('rodrigues')
    cy.contains('E-mail').type('daniel@teste.com.br')
    cy.contains('Como podemos te ajudar?').type('teste texto')

    cy.contains('button','Enviar').click()

  })
})