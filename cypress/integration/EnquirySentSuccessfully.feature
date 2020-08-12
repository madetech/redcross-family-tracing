Feature: Tell the user that the enquiry has been sent successfully

  Background:
    Given I visit the "enquiry sent" page

    Scenario: Check page exists
      Then I am on the "enquiry sent" page

    Scenario: There is an enquiry number on the page
      Then I should see an enquiry reference

    Scenario: Clicking the back to home page button should take me to the homepage
      When I click the "back to homepage" button
      Then I am on the "landing" page
