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
  it('Aula 3 - seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('YouTube')
    .should('have.value','youtube')
  })
    it('Aula 3.1 - seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('mentoria')
    .should('have.value','mentoria')
  })
  it('Aula 3.2 - seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1)
    .should('have.value','blog')
  })  
  it('Aula 3.3 - seleciona um produto (Cursos) por seu texto', () => {
    cy.get('#product').select('Cursos')
    .should('have.value','cursos')
  })
  it('Aula 4 - marca o tipo de atendimento', () => {

    cy.get('input[type="radio"][value="feedback"]').check()
    .should('be.checked')

    cy.get('input[type="radio"][value="elogio"]').check()
    .should('have.value', 'elogio')

    cy.get('input[type="radio"]').check('feedback')
    .should('be.checked')
    
    cy.get('input[type="radio"]').check('ajuda')
    .should('have.value', 'ajuda')
    
  })
  it('Aula 4.1 - marca todos os tipos radio', () => {

    cy.get('input[type="radio"]')
    .each(typeOfService => {
      cy.wrap(typeOfService)
      .check()
      .should('be.checked')
    })

  })
  it('Aula 4.2 - marca o tipo de atendimento pre selecionado', () => {

    cy.get('input[type="radio"]').should('be.checked').and('have.value', 'ajuda')
    
  })
  it('Aula 5 - marca ambos checkboxes, depois desmarca o último', () => {

    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')

//    cy.fillMandatoryFieldsAndSubmit()
//    cy.get('#email-checkbox').as('email-checkbox').check()
//    cy.get('#phone-checkbox').as('phone-checkbox').check()
//    cy.get('#phone-checkbox').uncheck().last()
//    cy.contains('button','Enviar').click()
//    cy.get('.success').should('be.visible')

  })
  it('Aula 5.1 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.fillMandatoryFieldsAndSubmit()
    cy.get('#phone-checkbox').as('phone-checkbox').check()

    cy.contains('button','Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('Aula 6 - seleciona um arquivo da pasta fixtures', () => {

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })

  })
  it('Aula 6.1 - seleciona um arquivo simulando um drag-and-drop', () => {

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json',{action: 'drag-drop'})
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })

  })
  it('Aula 6.2 - seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

    cy.fixture('example.json').as('exampleFile')
    cy.get('#file-upload')
      .selectFile('@exampleFile')
      .then(input => {
       expect(input[0].files[0].name).to.equal('example.json')
     })

  })

  it('Aula 7 - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a','Política de Privacidade')
      .should('have.attr','href','privacy.html')
      .and('have.attr', 'target', '_blank')
  })
  it('Aula 7.1 - acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a','Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
  })
})