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
    #Then I am on the "family reunion" page