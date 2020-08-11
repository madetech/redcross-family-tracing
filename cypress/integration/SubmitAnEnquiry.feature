Feature: Submit an enquiry Page
  As a user
  If I am eligible for help
  I should be able to submit my enquiry

  Background:
    Given I visit the "submit an enquiry" page

  # ToDo:
  # Scenario: Has a back link to navigate to the TBC page
  #  When I click the back link
  #  Then I am on the "TBC, I think you can get here from two places" page

  Scenario: Has all the form fields
    Then I see the "First name" text input
    Then I see the "Last name" text input
    Then I see the "Email" text input
    Then I see the "Phone" text input
    Then I see the "How should we contact you?" radio group with the following options:
      | Email        |
      | Phone        |
      | Text message |
    Then I see the "Postcode" text input
    Then I see the "interpreter-needed-primary-language" text input

  Scenario: Clicking "Submit Enquiry" does just that
    When I click the "submit enquiry" button
    Then I am on the "send enquiry" page
