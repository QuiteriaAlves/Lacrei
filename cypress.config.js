const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: false,
  video: false,
  screenshotOnRunFailure: false
})