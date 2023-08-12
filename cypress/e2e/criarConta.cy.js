import dados from '../dados/dados.json'

describe('Criar conta na Lacrei Saúde', () => {

  const senha = dados.user.senha

  it.only('Criando conta na Lacrei Saúde', () => {
    //Acesso à página para a criação da conta e validação se o usuário foi direcionado para a página certa
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
    cy.contains('button', 'Criar conta').click()
    cy.contains('h2', 'Cadastre-se').should('be.visible')
    //Preenchimento dos dados (conforme informações colocados no arquivo 'dados.json)
    cy.get('#first_name').type(dados.user.nome)
    cy.get('#last_name').type(dados.user.sobrenome)
    cy.get('#email').type(dados.user.email)
    cy.get('#password1').type(senha)
    cy.get('#password2').type(senha)
    //Marcação dos checklists apresentados bo formulário
    cy.get('input[name="accepted_privacy_document"]').check({force: true})
    cy.get('input[name="is_18_years_old_or_more"]').check({force: true})
    //Validação se as condições de preenchimento da senha foram atendidos
    cy.contains('8 caracteres').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Letra maiúscula').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Letra minúscula').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Número').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Caractere especial (ex: #!*-_&)').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('As senhas devem ser iguais').should('have.css', 'color', 'rgb(1, 135, 98)')
    //Clique no "Enviar" e validação se o usuário foi direcionado para a página certa
    cy.contains('button', 'Cadastrar').click()
    cy.contains('h2', 'Estamos quase lá...').should('be.visible')
  })
})