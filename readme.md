**Readme**

*Esse projeto foi desenvolvido como critério de aprovação para o processo para voluntária na vaga da QA Lead da Lacrei Saúde*

***Para iniciar esse teste, é necessário acessar a pasta 'cypress' > 'dados', e, no arquivo 'dados.json', colocar um email e uma senha senha.***

A senha tem que ter pelo menos um caracter especial, uma letra mainuscula, uma letra minúscula, um número e conter, no mínimo, 8 caracteres.

  {
    "user": {
        "nome": "Nome",
        "sobrenome": "Sobrenome",
        "email": "",
        "senha": ""
    }
}

***Versao do projeto:*** 1.0.0

***Versões utilizadas:***
  Cypress: 14.0.3
  mpn: 10.9.2
  Node.js: v22.13.1

***Estutura do projeto:***

- cypress > dados > dados.json: nele, serão colocados os dados de um novo usuário para serem usados no teste para 'Criar conta', para demostração desse recurso (alocar dados à parte do código).

- cypress > e2e > camposObrigatorios.cy.js: teste necessário para verificar a obrigatoriedade dos campos e da marcação dos checkboxes na crição de uma nova conta;

- cypress > e2e > criarConta.cy.js: teste necessário para verificar a efetiva criação de uma conta, isso é, com todos os dados preenchivos e válidos, além da marcação dos checkboxes;

- cypress > support > e2e.js: foi criado um comando personalizado para demonstração desse recurso.

***Atenção!!!***

Coloquei alguns comentários no código (mesmo não vendo como uma boa prática) para ajudar na conferência e na visulização de como criei o código.

Foi desativada as opções de criação dos vídeos e do screenshots. Caso queira habilitar essas opções, vá em 'cypress.config.js' e coloque a informação de true como informado abaixo.

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://frontend-lacrei-pessoa-usuaria.vercel.app/',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: true,
  video: true,
  screenshotOnRunFailure: false
})