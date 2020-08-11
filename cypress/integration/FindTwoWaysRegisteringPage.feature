Feature: Find Two Ways - Registering Missing People Page
  As a user
  I want to know how families are found
  So that I know what the steps are

  Background:
    Given I visit the "registering missing people information" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "what we do"

  Scenario: Has a back link to navigate to the we find families in two ways page
    When I click the back link
    Then I am on the "we find families in two ways" page

  Scenario: Clicking the skip to check eligibility button navigates to the check eligibility page
    When I click the "skip to check eligibility" button
    Then I am on the "check eligibility" page

  Scenario: Clicking the Find out more button navigates to the actively searching information page
    When I click the "find out more" button
    Then I am on the "actively searching information" page
