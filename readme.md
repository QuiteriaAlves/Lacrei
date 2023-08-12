**Readme**

**Para iniciar esse teste, é necessário acessar, na pasta 'cypress' > 'dados', o arquivo 'dados.json' e colocar os dados para esse teste.**

*Esse projeto foi desenvolvido como critério de aprovação para o processo para voluntária na vaga da QA Lead da Lacrei Saúde*

**Versao do projeto: 1.0.0**

**Versões utilizadas:**
  Cypress: 12.17.3
  Node.js: v18.15.0

**Estutura do projeto:**

1 - Na pasta 'cypress', há a pasta 'dados', com o arquivo 'dados.json'. Nele, temos um atributo para todos os dados necessários para esses testes (tanto para a criação de conta como para o acesso ao site) e, para esses testes, basta colocar os dados necessários.

2 - Como teste automatizado é usado para garantir que a principal funcionalidade não foi "quebrada" pelas futuras implementações, os testes contemplados nesse projeto é apenas o "caminho feliz", isso é, a efetiva criação da conto e o efetivo acesso ao site.

**Observação:** os demais casos de testes poderão ser feitas de forma manual. Visto que se trata das demais regras.

**Atenção!!!** Coloquei alguns comentários no código (mesmo não vendo como uma boa prática como coloquei) para ajudar na conferência e na visulização de como criei o código.

3 - Foi mantida a pasta 'support' por ser uma parta padrão do cypress.

4 - Foi desativada as opções de criação dos vídeos e do screenshots.
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
