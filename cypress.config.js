const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: true,
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      charts: true,
      reportPageTitle: "Automation Exercise Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      overwrite: false,
      html: true,
      json: true, 
    },
    setupNodeEvents(on, config) {
      // register mochawesome reporter plugin
      try {
        require('cypress-mochawesome-reporter/plugin')(on);
      } catch (e) {
      
        throw e;
      }
      return config;
    },
  },
});
