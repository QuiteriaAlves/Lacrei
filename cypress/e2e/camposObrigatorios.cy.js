describe('Verificar obrigatoriedade de preenchimento dos campos', () => {

    it('Verificando obrigatoriedade de preenchimento dos campos', () => {
        //Acessando a tela de cadastro da conta
        cy.acessarCadastro()
        //Clicar em Cadastro sem preencher nenhum campo
        cy.contains('button', 'Cadastrar').click()
        //Validação da obrigatoriedade dos campos iniciais
        cy.contains('O nome é obrigatório.').should('be.visible').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('O sobrenome é obrigatório.').should('be.visible').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('O e-mail é obrigatório.').should('be.visible').should('have.css', 'color', 'rgb(236, 14, 0)')
        //Validação da obrigatoriedade da senha e dos seus critérios
        cy.contains('8 caracteres').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('Letra maiúscula').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('Letra minúscula').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('Número').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('Caractere especial (ex: #!*-_&)').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('As senhas devem ser iguais').should('have.css', 'color', 'rgb(236, 14, 0)')
        //Validação da obrigatoriedade da marcação dos checkboxes
        cy.contains('Você deve aceitar os termos.').should('be.visible').should('have.css', 'color', 'rgb(236, 14, 0)')
        cy.contains('Você deve ter 18 anos ou mais.').should('be.visible')
            .should('have.css', 'color', 'rgb(236, 14, 0)')
    })
})