***Informações sobre esse projeto***

Ele foi desenvolvido como critério de aprovação para o processo de voluntária na vaga de QA Lead da Lacrei Saúde.

## Atenção!!!

***Para esses testes, é necessário acessar a pasta `cypress` > `dados` > `dados.json`, no Visual Studio, e colocar um e-mail e uma senha. Caso necessário, suba a arquivo para o Git Hub.***

***A senha tem que ter pelo menos um caractere especial, uma letra maiúscula, uma letra minúscula, um número e conter, no mínimo, 8 caracteres.***

Exemplo:

```json
{
  "user": {
    "nome": "Nome",
    "sobrenome": "Sobrenome",
    "email": "cypress@provedor.com.br",
    "senha": "#Cyp1234"
  }
}
```

***Mas depois dos testes, lembre-se de retirar esses dados da pasta `cypress` > `dados` > `dados.json`, no Visual Studio. Nesse momento, não é necessário subir o arquivo para o Github.***

***Versão do projeto: 1.0.0***

***Versões utilizadas:***
- Cypress: 14.0.3
- npm: 10.9.2
- Node.js: v22.13.1

É recomendável a mesma versão acima ou superior.

***Estrutura do projeto:***

- cypress > dados > dados.json: nele, serão colocados os dados de um novo usuário para serem usados no teste de 'Criar conta', para demonstração desse recurso (alocar dados à parte do código).

- cypress > e2e > camposObrigatorios.cy.js: teste necessário para verificar a obrigatoriedade dos campos e da marcação dos checkboxes na criação de uma nova conta.

- cypress > e2e > criarConta.cy.js: teste necessário para verificar a efetiva criação de uma conta, ou seja, com todos os dados preenchidos e válidos, além da marcação dos checkboxes.

- cypress > support > e2e.js: foi criado um comando personalizado para demonstração desse recurso.

- .github > workflows > main.yml: nesse arquivo estão as configurações para a execução dos testes de forma automática pelo GitHub Actions (ao executar um comando push) sendo somente necessário informar um e-mail e uma senha, como orientado acima.


***Observação:***

1 - Coloquei alguns comentários no código (mesmo não vendo como uma boa prática) para ajudar na conferência e na visualização de como criei o código.

2 - Foi desativada a opção de criação de vídeos e screenshots. Caso queira habilitar essas opções, vá em cypress.config.js e coloque a informação como true, conforme informado abaixo:

```javascript
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