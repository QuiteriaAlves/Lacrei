Cypress.Commands.add('acessar', () => {
    //Acesso ao site da Lacrei Saúde e validação se o usuário foi direcionado para a página certa
    cy.visit('/')
    cy.contains('h2', 'Boas-vindas à Lacrei Saúde').should('be.visible')
})