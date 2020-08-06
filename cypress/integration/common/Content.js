import { Then, When } from "cypress-cucumber-preprocessor/steps";
import { elementNameToClass } from "./support/elementNameToClass";
import { pageNameToPath } from "./support/pageNameToPath";
import { textToValue } from "./support/textToValue";

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
        button.contains(buttonText, { matchCase: false });
        button.should('have.attr', 'href')
            .and('equal', pageNameToPath[pageName]);
    }
);

Then(/^I see a "([^"]*)" link linking to the "([^"]*)" page$/,
    function (linkText, pageName) {
        const link = cy.get('.redcross-back-link');
        link.contains(linkText, { matchCase: false });
        link.should('have.attr', 'href')
            .and('equal', pageNameToPath[pageName]);
    }
);

When(
    /^I see a "([^"]*)" button linking to the "([^"]*)" page$/,
    function (buttonText, pageName) {
        const button = cy.get('.redcross-button');
        button.contains(buttonText, { matchCase: false });
        button.should('have.attr', 'href')
            .and('equal', pageNameToPath[pageName]);
    }
);

When(/^I select "([^"]*)" radio button$/,
    function(radioText){
        const radioButton = cy.get('[type="radio"]');
        radioButton.check(textToValue[radioText]);
    }
);
