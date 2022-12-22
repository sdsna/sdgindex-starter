const { defineConfig } = require("cypress");

module.exports = defineConfig({
  blockHosts: ["www.google-analytics.com", "www.googletagmanager.com"],
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3000",
  },
});
