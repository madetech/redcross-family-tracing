Feature: Where should we start looking Page
  As a user
  I want to see options on different countries
  So I know inform on where to start looking

  Background:
    Given I visit the "where should we start looking" page

  Scenario: Progression Bar shows check eligibility
    Then the progression bar is at "check eligibility"

  Scenario: Has a back link to navigate to the how did you lose contact page
    When I click the back link
    Then I am on the "how did you lose contact with your family" page

  Scenario: Selecting one or more active Countries and clicking check eligibility navigates to Relative In Hiding page
    When I select "one to three countries" radio button
    When I select "AL" in the "country-1" select box
    When I click the "check eligibility" button
    Then I am on the "relatives in hiding" page

  Scenario: Clicking check eligibility does nothing when selecting Countries radio button, but no countries.
    When I select "one to three countries" radio button
    When I click the "check eligibility" button
    Then I am on the "where should we start looking" page
