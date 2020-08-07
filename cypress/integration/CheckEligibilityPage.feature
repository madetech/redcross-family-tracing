Feature: Check Eligibility Page
  As a user
  I want to an introduction to the check eligilibity process
  So I know what will happen

  Background:
    Given I visit the "check eligibility" page

  Scenario: Progression Bar shows check eligibility
    Then the progression bar is at "check eligibility"

  Scenario: Has a back link to navigate to the find families in two ways page
    When I click the "back" link
    Then I am on the "we find families in two ways" page

  Scenario: Clicking the check eligibility button navigates to the how did you lose contact page
    When I click the "check eligibility" button
    Then I am on the "how did you lose contact with your family" page
