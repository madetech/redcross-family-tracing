Feature: Where should we start looking Page
  As a user
  I want to see options on different countries
  So I know inform on where to start looking

  Background:
    Given I visit the "not eligible" page

  Scenario: Has a back link to navigate to the how did you lose contact page
    When I click the "back" link
    Then I am on the "how did you lose contact with your family" page

  Scenario: Has a link to the Salvation Army Family Tracing page
    Given I do not see a link to the "salvation army family tracing" page
    When I click the "Salvation Army" accordion heading
    Then I see a link to the "salvation army family tracing" page

  Scenario: Has a link to the Salvation Army Family Tracing page
    Given I do not see a link to the "missing people" page
    When I click the "Missing People" accordion heading
    Then I see a link to the "missing people" page
