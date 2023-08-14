import dados from '../dados/dados.json'

describe('Acessar o site', () => {

  beforeEach('Logar', () => {
    //Fazer login no sistema
    cy.acessar()
  })

  it('Acessando site da Lacrei Saúde', () => {
    //Preenchendo os dados
    cy.get('#email').type(dados.user.email)
    cy.get('#password').type(dados.user.senha)
    //Envio do formulário
    cy.get('button[type="submit"]').click()
    //Validação se o usuário foi direcionado para a página certa
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde, continue o seu cadastro').should('be.visible')
  })

  it('Continuando o cadastro', () => {
    //Preenchimento dos dados (conforme informações colocados no arquivo 'dados.json')
    cy.get('#email').type(dados.user.email)
    cy.get('#password').type(dados.user.senha)
    //Envio do formulário
    cy.get('button[type="submit"]').click()
    //Validação se o usuário foi direcionado para a página certa
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde, continue o seu cadastro').should('be.visible')
    //Clique em continuar o cadastro e validar se foi aberta a tela certa
    cy.contains('button', 'Continuar cadastro').click()
    cy.contains('h2', 'Com qual pronome você se identifica?').should('be.visible')
    //Preenchimento das informações
    cy.contains('a/Ela/Dela').click()
    cy.contains('p', '2').click()
    cy.contains('Branca').click()
    cy.contains('p', '3').click()
    cy.contains('Mulher Cis').click()
    cy.contains('p', '4').click()
    cy.contains('Heterossexual').click()
    cy.contains('p', '5').click()
    //Conclusão do cadastro
    cy.contains('button', 'Concluir cadastro').click()
  })
})