import { paramCase } from 'change-case';
import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I see the "([^"]*)" text input$/, function (inputName) {
  cy.get(`input#${paramCase(inputName)}`).should('exist');
});

Then(/^I see the "([^"]*)" radio group with the following options:$/, function (
  radioGroupName,
  dataTable
) {
  const radioGroupId = paramCase(radioGroupName);
  const optionIds = dataTable.rawTable.flat().map((option) => paramCase(option));
  optionIds.forEach((optionId) => {
    cy.get(`input[name="${radioGroupId}"][value="${optionId}"]`).should('exist');
  });
});
