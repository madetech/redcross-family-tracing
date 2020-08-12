import * as faker from 'faker';
import slugify from 'slugify';
import { Then, When } from 'cypress-cucumber-preprocessor/steps';

function textToFormElementId(name) {
  return slugify(name, {
    lower: true,
    strict: true
  });
}

Then(/^I see the "([^"]*)" text input$/, function (name) {
  cy.get(`input#${textToFormElementId(name)}`).should('exist');
});

Then(/^I see the "([^"]*)" radio group with the following options:$/, function (name, dataTable) {
  const radioGroupId = textToFormElementId(name);
  const options = dataTable.rawTable.flat();
  options.forEach((option) => {
    cy.get(`input[name="${radioGroupId}"][value="${option}"]`).should('exist');
  });
});

Then(/^I see a "([^"]*)" error message on the "([^"]*)" form element$/, function (
  errorMessage,
  name
) {
  cy.get(`#${textToFormElementId(name)}-error`).contains(errorMessage);
});

When(/^I ([^"]*) the "([^"]*)" form element$/, function (action, name) {
  switch (action) {
    case 'select':
      cy.get(`input[type="radio"]#${textToFormElementId(name)}`).check();
      break;
    default:
      cy.get(`input#${textToFormElementId(name)}`).type(faker.random.word());
  }
});

Then(/^the "([^"]*)" form element is (.*)ed$/, function (name, action) {
  switch (action) {
    case 'select':
      cy.get(`input[type="radio"]#${textToFormElementId(name)}`).should('be.checked');
      break;
    default:
      cy.get(`input#${textToFormElementId(name)}`)
        .invoke('val')
        .should('not.be.empty');
  }
});
