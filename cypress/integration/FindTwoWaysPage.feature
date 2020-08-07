Feature: Find Two Ways Page
  As a user
  I want to see some information on the find families in two ways page
  So I know about there are two ways to find families

  Background:
    Given I visit the "we find families in two ways" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "what we do"

  Scenario: Has a back link to navigate to the what help are you looking for today page
    When I click the "back" link
    Then I am on the "what help are you looking for today" page

  Scenario: Clicking the skip to check eligibility button navigates to the check eligibility page
    When I click the "skip to check eligibility" button
    Then I am on the "check eligibility" page
