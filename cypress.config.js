const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: "[name]",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      on('task', {
        logToTerminal(message) {
          console.log('🖨️ CYPRESS LOG:', message);
          return null;
        }
      });
    },
  },
});
