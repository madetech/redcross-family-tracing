import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I visit the landing page', () => {
    cy.visit('/');
})

Then('I see {string} in the page heading', function (expectedHeading) {
    cy.get('h1').contains(expectedHeading);
});

Then('I see link to {string} in hero', function(expectedUrl) {
    cy.get('div.app-hero-container > a')
        .should('have.attr', 'href')
        .and('equal', expectedUrl)
})