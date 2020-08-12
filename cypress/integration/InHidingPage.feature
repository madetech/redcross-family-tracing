Feature: Are you or your relative's in hiding or in danger page
  As a user
  I want to see options based on my relative's hiding or danger status
  So I can check my eligibility

  Background:
    Given I visit the "relatives in hiding" page

  Scenario: Progression Bar shows check eligibility
    Then the progression bar is at "check eligibility"

  Scenario: Has a back link to navigate to the where to start looking page
    When I click the back link
    Then I am on the "where should we start looking" page

  Scenario: Selecting "No I'm not worried" about searching in public and clicking continue navigates to the Eligible for Both Services page
    When I select "no i'm not worried about searching in public" radio button
    Then I click the "continue" button
    And I am on the "eligible for both" page
    And I should see that both services are eligible

  Scenario: Selecting Yes publicly searching for my family could be dangerous and clicking continue navigates to the Eligible for non public page
    When I select "yes publicly search for my family could be dangerous" radio button
    Then I click the "continue" button
    And I am on the "eligible for one non public" page
    And I should see the no public services advice
    When I click the back link
    Then I am on the "relatives in hiding" page

  Scenario: Selecting Im not sure and clicking continue navigates to the Eligible for Both Services page and back
    When I select "i'm not sure" radio button
    Then I click the "continue" button
    And I am on the "eligible for both" page
    And I should see that both services are eligible
    When I click the back link
    Then I am on the "relatives in hiding" page
