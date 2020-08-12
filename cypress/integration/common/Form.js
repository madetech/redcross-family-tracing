import slugify from 'slugify';
import { Then } from 'cypress-cucumber-preprocessor/steps';

function textToFormElementId(inputName) {
  return slugify(inputName, {
    lower: true,
    strict: true
  });
}

Then(/^I see the "([^"]*)" text input$/, function (inputName) {
  cy.get(`input#${textToFormElementId(inputName)}`).should('exist');
});

Then(/^I see the "([^"]*)" radio group with the following options:$/, function (
  radioGroupName,
  dataTable
) {
  const radioGroupId = textToFormElementId(radioGroupName);
  const options = dataTable.rawTable.flat();
  options.forEach((option) => {
    cy.get(`input[name="${radioGroupId}"][value="${option}"]`).should('exist');
  });
});
