const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {},
    supportFile: false,
    pageLoadTimeout: 100000
  },
})
