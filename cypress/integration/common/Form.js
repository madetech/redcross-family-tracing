import * as faker from 'faker';
import slugify from 'slugify';
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

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

Then(/^I do not see an error message on the "([^"]*)" form element$/, function (name) {
  cy.get(`#${textToFormElementId(name)}-error`).should('not.exist');
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

Then(/^I see an error alert above the form$/, function () {
  cy.get('.govuk-error-summary').should('exist');
});

Given(/^I have filled all the fields$/, function () {
  cy.get('input#first-name').type(faker.name.firstName());
  cy.get('input#last-name').type(faker.name.lastName());
  cy.get('input#email').type(faker.internet.exampleEmail());
  cy.get('input#phone').type(faker.phone.phoneNumber());
  cy.get('input[type="radio"]#how-should-we-contact-you').check();
  cy.get('input#postcode').type(faker.address.zipCode());
  cy.get('input[type="radio"]#how-old-are-you-2').check();
  cy.get('input#referrer-first-name').type(faker.name.firstName());
  cy.get('input#referrer-last-name').type(faker.name.lastName());
  cy.get('input#referrer-email').type(faker.internet.exampleEmail());
});
