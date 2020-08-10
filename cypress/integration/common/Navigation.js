import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { pageNameToPath } from './support/pageNameToPath';
import { elementNameToClass } from './support/elementNameToClass';
import { textToId } from './support/textToValue';

When(/^I do nothing$/, () => {});

When(/^I visit the "([^"]*)" page$/, (pageName) => {
  cy.visit(pageNameToPath[pageName]);
});

When(/^I visit a page which does not exist$/, function () {
  const url = '/this-page-definitely-does-not-exist';
  // This is for the status code...
  cy.request({ url, failOnStatusCode: false }).as('lastRequest');
  // This is for the UI stuff...
  cy.visit(url, { failOnStatusCode: false });
});

When(/^I click the "([^"]*)" button in the "([^"]*)" element$/, (buttonText, containingElement) => {
  cy.get(`${elementNameToClass[containingElement]} .redcross-button`).click();
});

When(/^I click the "([^"]*)" button$/, (buttonText) => {
  const id = textToId[buttonText];
  cy.get(`#${id}`).click();
});

// Todo: fix this...
// eslint-disable-next-line no-unused-vars
When(/^I click the "([^"]*)" link$/, (linkText) => {
  cy.get('.redcross-back-link').click();
});

Then(/^I am on the "([^"]*)" page$/, (pageName) => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq(pageNameToPath[pageName]);
  });
});
