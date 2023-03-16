const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure = true;
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);//for html reports
    },
  },
});
