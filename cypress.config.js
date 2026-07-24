const { defineConfig } = require('cypress');
require("dotenv").config();

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  // ...
});
module.exports = defineConfig({
  projectId: cypress.env.CYPRESS_PROJECT_ID,
  video: true,
  screenshotOnRunFailure: true,

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
