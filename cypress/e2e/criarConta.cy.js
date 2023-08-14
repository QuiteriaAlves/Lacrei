import dados from '../dados/dados.json'

describe('Criar conta na Lacrei Saúde', () => {

  const senha = dados.user.senha

  it('Criando conta na Lacrei Saúde', () => {
    //Acessando a tela de cadastro da conta
    cy.acessar()
    //Acessando a opçao "Criar conta"
    cy.contains('button', 'Criar conta').click()
    //Preenchimento dos dados (conforme informações colocados no arquivo 'dados.json')
    cy.get('#first_name').type(dados.user.nome)
    cy.get('#last_name').type(dados.user.sobrenome)
    cy.get('#email').type(dados.user.email)
    cy.get('#password1').type(senha)
    cy.get('#password2').type(senha)
    //Marcação dos checklists apresentados no formulário
    cy.get('input[name="accepted_privacy_document"]').check({ force: true })
    cy.get('input[name="is_18_years_old_or_more"]').check({ force: true })
    //Validação se as condições de preenchimento da senha foram atendidas
    cy.contains('8 caracteres').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Letra maiúscula').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Letra minúscula').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Número').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('Caractere especial (ex: #!*-_&)').should('have.css', 'color', 'rgb(1, 135, 98)')
    cy.contains('As senhas devem ser iguais').should('have.css', 'color', 'rgb(1, 135, 98)')
    //Envio e validação se o usuário foi direcionado para a página certa
    cy.contains('button', 'Cadastrar').click()
    cy.wait(200)
    cy.contains('h2', 'Estamos quase lá...').should('be.visible')
  })
})