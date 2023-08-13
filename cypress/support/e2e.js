import dados from '../dados/dados.json'

Cypress.Commands.add('login', ( ) => {
    //Acesso ao site da Lacrei Saúde e validação se o usuário foi direcionado para a página certa
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde').should('be.visible')
    //Preenchimento dos dados (conforme informações colocados no arquivo 'dados.json')
    cy.get('#email').type(dados.user.email)
    cy.get('#password').type(dados.user.senha)
    //Envio e validação se o usuário foi direcionado para a página certa
    cy.get('button[type="submit"]').click()
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde, continue o seu cadastro').should('be.visible')
})


Cypress.Commands.add('acessarCadastro', ( ) => {
        //Acesso à página para criação da conta e validação se o usuário foi direcionado para a página certa
        cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
        cy.contains('button', 'Criar conta').click()
        cy.contains('h2', 'Cadastre-se').should('be.visible')
})