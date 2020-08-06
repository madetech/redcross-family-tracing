import {Then, When} from "cypress-cucumber-preprocessor/steps";
import {pageNameToPath} from "./support/pageNameToPath";
import {elementNameToClass} from "./support/elementNameToClass";

When(/^I do nothing$/, ()=>{});

When(
    /^I visit the "([^"]*)" page$/, (pageName) => {
        cy.visit(pageNameToPath[pageName]);
    }
);

When(
    /^I click the "([^"]*)" button in the "([^"]*)" element$/,
    (buttonText, containingElement) => {
        cy.get(`${elementNameToClass[containingElement]} .redcross-button`)
            .click();
    }
);

When(
    /^I click the "([^"]*)" button$/,
    (buttonText) => {
        cy.get('.redcross-button').click();
    }
);

When(
    /^I click the "([^"]*)" link$/,
    (linkText) => {
        cy.get(".redcross-back-link").click();
    }
);

Then(
    /^I am on the "([^"]*)" page$/,
    (pageName) => {
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq(pageNameToPath[pageName])
        })
    }
);
