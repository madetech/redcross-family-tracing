Feature: Enquiry Page
  As a user
  I want to see useful things on the enquiry page
  So I know what to do next

  Background:
    Given I visit the "make an enquiry" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "what we do"

  Scenario: Has the start button
    Then I see a "start" button linking to the "what help are you looking for today" page

  Scenario: Clicking the enquiry button in the "<element>" element navigates to the enquiry page
    When I click the "start" button
    Then I am on the "what help are you looking for today" page

  Scenario: Has a back link to navigate to the landing page
    When I click the "back" link
    Then I am on the "landing" page
