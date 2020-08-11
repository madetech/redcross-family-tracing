import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { elementNameToClass } from './support/elementNameToClass';
import { pageNameToPath } from './support/pageNameToPath';
import { textToId } from './support/textToId';

function assertElementWithTextLinkingToPageExists(cssSelector, text, pageName) {
  const element = cy.get(cssSelector);
  element.contains(text, { matchCase: false });
  element.should('have.attr', 'href').and('equal', pageNameToPath[pageName]);
}

Then(/^I see "([^"]*)" in the page heading$/, function (expectedHeading) {
  cy.get('h1').contains(expectedHeading);
});

Then(/^I see a "([^"]*)" button linking to the "([^"]*)" page in the "([^"]*)" element$/, function (
  buttonText,
  pageName,
  containingElement
) {
  assertElementWithTextLinkingToPageExists(
    `${elementNameToClass[containingElement]} .redcross-button`,
    buttonText,
    pageName
  );
});

Then(/^I see a "([^"]*)" link linking to the "([^"]*)" page$/, function (linkText, pageName) {
  assertElementWithTextLinkingToPageExists('.redcross-back-link', linkText, pageName);
});

When(/^I see a "([^"]*)" button linking to the "([^"]*)" page$/, function (buttonText, pageName) {
  assertElementWithTextLinkingToPageExists('.redcross-button', buttonText, pageName);
});

When(/^I select "([^"]*)" radio button$/, function (radioText) {
  const radioSelector = `input[type="radio"]#${textToId[radioText]}`;
  cy.get(radioSelector).check();
});

When(/^I select "([^"]*)" in the "([^"]*)" select box$/, function (value, selectId) {
  cy.get(`#${selectId}`).select(value);
});

When(/^I click the "([^"]*)" accordion heading$/, function (accordionHeading) {
  cy.xpath(
    `//*[@class="govuk-accordion__section-button"][contains(text(),"${accordionHeading}")]`
  ).click();
});

Given(/^I do not see a link to the "([^"]*)" page$/, function (pageName) {
  cy.get(`a[href="${pageNameToPath[pageName]}`).should('not.be.visible');
});

Then(/^I see a link to the "([^"]*)" page$/, function (pageName) {
  cy.get(`a[href="${pageNameToPath[pageName]}`).should('be.visible');
});
