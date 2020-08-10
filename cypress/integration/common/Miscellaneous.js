import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^the status code is (\d+)$/, function (httpStatus) {
  cy.get('@lastRequest').should('have.property', 'status', httpStatus);
});
