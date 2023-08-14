const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://frontend-lacrei-pessoa-usuaria.vercel.app',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false
})