import dados from '../dados/dados.json'

describe('Criar conta na Lacrei Saúde', () => {

  it.only('Acessando site da Lacrei Saúde', () => {
    //Acesso ao site da Lacrei Saúde e validação se o usuário foi direcionado para a página certa
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde').should('be.visible')
    //Preenchimento dos dados (conforme informações colocados no arquivo 'dados.json)
    cy.get('#email').type(dados.user.email)
    cy.get('#password').type(dados.user.senha)
    //Clique no "Enviar" e validação se o usuário foi direcionado para a página certa
    cy.get('button[type="submit"]').click()
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde, continue o seu cadastro').should('be.visible')
  })
})