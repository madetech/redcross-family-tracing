Feature: Find Two Ways - Actively searching for people page
  As a user
  I want to know how families are found
  So that I know what step 2 is

  Background:
    Given I visit the "actively searching information" page

  Scenario: Has a back link to navigate to the we find families in two ways page
    When I click the back link
    Then I am on the "registering missing people information" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "what we do"


  Scenario: Clicking the Find out more button navigates to the actively searching information page
    When I click the "find out more" button
    Then I am on the "check eligibility" page
