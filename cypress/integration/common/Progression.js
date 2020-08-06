import { Then } from "cypress-cucumber-preprocessor/steps";

Then(
    /^the progression bar is at "([^"]*)"$/,
    function (expectedText) {
        cy.get('.app-progression-bar > li.active').contains(expectedText, { matchCase: false });
    }
);
