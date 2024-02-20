const { defineConfig } = require("cypress");

/**
 * @see https://cloud.cypress.io/
 */
module.exports = defineConfig({
    projectId: 'opc7rk',
    e2e: {
        baseUrl: 'http://localhost:8080',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
