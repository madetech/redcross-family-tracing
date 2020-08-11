Feature: How Did You Lose Contact Page
  As a user
  I want to choose how I lost contact with my family
  So I can be directed to the correct information and check my eligibility

  Background:
    Given I visit the "how did you lose contact with your family" page

  Scenario: Progression Bar shows check eligibility
    Then the progression bar is at "check eligibility"

  Scenario: Has a back link to navigate to the check eligibility page
    When I click the back link
    Then I am on the "check eligibility" page

  Scenario: Selecting During war, natural disaster, or on a journey to the UK and clicking continue navigates to the Where Start Looking page
    When I select "during war, natural disaster, or on a journey to the uk" radio button
    Then I click the "check eligibility" button
    Then I am on the "where should we start looking" page

  Scenario: Selecting Something else, such as adoption or a family dispute and clicking continue navigates to the We Can't Help page
    When I select "something else, such as adoption or a family dispute" radio button
    Then I click the "check eligibility" button
    Then I am on the "we cant help with your enquiry" page
