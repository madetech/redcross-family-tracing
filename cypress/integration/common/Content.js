import {Then} from "cypress-cucumber-preprocessor/steps";
import {elementNameToClass} from "./elementNameToClass";
import {pageNameToPath} from "./pageNameToPath";

Then(
    /^I see "([^"]*)" in the page heading$/,
    function (expectedHeading) {
        cy.get('h1').contains(expectedHeading);
    }
);

Then(
    /^I see a "([^"]*)" button linking to the "([^"]*)" page in the "([^"]*)" element$/,
    function (buttonText, pageName, containingElement) {
        const button = cy.get(`${elementNameToClass[containingElement]} .redcross-button`);
        button.contains(buttonText);
        button.should('have.attr', 'href')
            .and('equal', pageNameToPath[pageName])
    }
);
