import { Before } from 'cypress-cucumber-preprocessor/steps';

// Cypress does not clear session storage between tests by default
// which caused weirdness with accordions staying open between tests.
Before(() => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});
