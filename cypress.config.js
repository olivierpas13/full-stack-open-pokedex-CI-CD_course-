const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    pageLoadTimeout: 100000
  },
})
