Cypress.Commands.add('acessar', () => {
    //Acesso ao site da Lacrei Saúde e validação se o usuário foi direcionado para a página certa
    cy.visit('/cadastro')
    cy.contains('h2', 'Crie sua conta na Lacrei Saúde').should('be.visible')
})