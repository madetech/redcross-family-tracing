import { When } from "cypress-cucumber-preprocessor/steps";

When(
    /^I visit the landing page$/, () => {
    cy.visit('/');
})
