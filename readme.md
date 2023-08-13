**Readme**

<<<<<<< HEAD
*Esse projeto foi desenvolvido como critério de aprovação para o processo para voluntária na vaga da QA Lead da Lacrei Saúde*

***Para iniciar esse teste, é necessário acessar a pasta 'cypress' > 'dados', e, no arquivo 'dados.json', colocar os dados para esse teste.***

***Versao do projeto: 1.0.0***

***Versões utilizadas:***
  Cypress: 12.17.3
  Node.js: v18.15.0

***Estutura do projeto:***
=======
**Para iniciar esse teste, é necessário acessar, na pasta 'cypress' > 'dados', o arquivo 'dados.json' e colocar os dados para esse teste.**

*Esse projeto foi desenvolvido como critério de aprovação para o processo para voluntária na vaga da QA Lead da Lacrei Saúde*

**Versao do projeto: 1.0.0**

**Versões utilizadas:**
  Cypress: 12.17.3
  Node.js: v18.15.0

**Estutura do projeto:**
>>>>>>> b3d0f8edc6d6bf666c195be0eac41984e366cc9d

- cypress > dados > dados.json: nele, serão colocados os dados de um novo usuário para serem usados no teste para 'Criar conta' e 'Acessar o site'. Nesse arquivo, temos um atributo para cada dado necessário para os testes citados acima e, para eles, basta colocar os dados necessários.

- cypress > e2e > camposObrigatorios.cy.js: nesse arquivo, é encontrado o teste necessário para verificar a obrigatoriedade do preenchimento dos campos e da marcação dos checkboxes na crição de uma nova conta;

<<<<<<< HEAD
- cypress > e2e > criarConta.cy.js: nesse arquivo, é encontrado o teste necessário para verificar a efeetiva crição de uma nova conta, isso é, com todos os dados preenchivos e válidos, além da marcação dos checkboxes;

- cypress > e2e > siteAcessar.cy.js: nesse arquivo, é encontrado o teste necessário para validar o acesso ao site e continuar o cadastro de um novo uduário;
=======
**Observação:** os demais casos de testes poderão ser feitas de forma manual. Visto que se trata das demais regras.

**Atenção!!!** Coloquei alguns comentários no código (mesmo não vendo como uma boa prática como coloquei) para ajudar na conferência e na visulização de como criei o código.
>>>>>>> b3d0f8edc6d6bf666c195be0eac41984e366cc9d

- cypress > support > e2e.js: foram criados dois comandos personalziados que são usados por mais de um teste. Com isso, em caso de uma manutenção, fica mais fácil.

***Atenção!!!***

Coloquei alguns comentários no código (mesmo não vendo como uma boa prática como coloquei) para ajudar na conferência e na visulização de como criei o código.

***Observações:***

1 - Como teste automatizado é usado para garantir que a principal funcionalidade não foi "quebrada" pelas futuras implementações, os testes contemplados, aqui, são apenas os mais básicos. Temos o "caminho feliz", isso é, a efetiva criação da conta, o efetivo acesso ao site e a afetiva continuidade do cadastro e o seu "extremo", isso é, quando nenhum dados é colocado no momento de criação de uma nova conta.

Observação: os demais casos de testes poderão ser feitas de forma manual, visto que se trata das demais regras e proteções.

2 - Foi desativada as opções de criação dos vídeos e do screenshots.

Caso queira habilitar essas opções, vá em 'cypress.config.js' e retire as linhas:

  video: false,
  screenshotOnRunFailure: false

Ficando:

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false
})
