import { When } from "cypress-cucumber-preprocessor/steps";
import { pageNameToPath } from "./pageNameToPath";

When(
    /^I visit the "([^"]*)" page$/, (pageName) => {
        cy.visit(pageNameToPath[pageName]);
    }
);
