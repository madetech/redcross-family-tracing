import { paramCase } from 'change-case';
import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I see the "([^"]*)" text input$/, function (inputName) {
  const inputID = paramCase(inputName);
  cy.get(`input#${inputID}`).should('exist');
});
