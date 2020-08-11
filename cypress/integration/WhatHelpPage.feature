Feature: What Help Page
  As a user
  I want to see options on the what help page
  So I know what to do next

  Background:
    Given I visit the "what help are you looking for today" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "what we do"

  Scenario: Has a back link to navigate to the enquiry
    When I click the "back" link
    Then I am on the "make an enquiry" page

  Scenario: Selecting Finding Family and clicking continue navigates to the Family Reunion page
    When I select "finding family" radio button
    Then I click the "continue" button
    Then I am on the "we find families in two ways" page

  Scenario: Selecting Bringing Family safely to the UK and clicking continue navigates to the Find Family Two Ways page
    When I select "bringing family safely to the uk" radio button
    Then I click the "continue" button
    Then I am on the "family reunion" page

  Scenario: Selecting Sending a message to hard to reach relatives and clicking continue navigates to the Family Reunion page
    When I select "sending a message to hard to reach relatives" radio button
    Then I click the "continue" button
    Then I am on the "send message to relatives" page

  Scenario: Selecting nothing and clicking continue navigates to the What Help page
    When I do nothing
    Then I click the "continue" button
    Then I am on the "what help are you looking for today" page
