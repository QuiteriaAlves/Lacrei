describe('Acessar o site', () => {

  it('Acessando site da Lacrei Saúde', () => {
    //Fazer login no sistema
    cy.login()
  })

  it('Continuando o cadastro', () => {
    //Fazer login no sistema
    cy.login()
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