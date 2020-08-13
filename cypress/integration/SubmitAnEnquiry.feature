Feature: Submit an enquiry Page
  As a user
  If I am eligible for help
  I should be able to submit my enquiry

  Background:
    Given I visit the "submit an enquiry" page from the "eligible for both" page

  Scenario: Progression Bar shows first dot
    Then the progression bar is at "submit an enquiry"

  Scenario: Has a back link to navigate to the Not Eligible page
    When I click the back link
    Then I am on the "eligible for both" page

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
    Then I see the "How old are you?" radio group with the following options:
      | Over 18  |
      | Under 18 |
    Then I see the "referrer-first-name" text input
    Then I see the "referrer-last-name" text input
    Then I see the "referrer-email" text input

  Scenario: Shows an error alert above the form if there are errors
    And I click the "submit enquiry" button
    Then I see an error alert above the form

  Scenario Outline: <fieldName> is required
    When I click the "submit enquiry" button
    Then I see a "<fieldName> is required" error message on the "<fieldName>" form element
    Examples:
      | fieldName                  |
      | First name                 |
      | Last name                  |
      | Email                      |
      | Phone                      |
      | How should we contact you? |
      | Postcode                   |
      | How old are you?           |

  Scenario: Email must be a valid email
    When I fill the "email" form element
    And I click the "submit enquiry" button
    Then I see a "Email must be a valid email address" error message on the "email" form element

  Scenario: Referrer details are not required if over 18
    When I select "over 18" radio button
    And I click the "submit enquiry" button
    Then I do not see an error message on the "referrer-first-name" form element
    And I do not see an error message on the "referrer-last-name" form element
    And I do not see an error message on the "referrer-email" form element

  Scenario: Referrer details are required if under 18
    When I select "under 18" radio button
    And I click the "submit enquiry" button
    Then I see a "First name is required" error message on the "referrer-first-name" form element
    And I see a "Last name is required" error message on the "referrer-last-name" form element
    And I see a "Email is required" error message on the "referrer-email" form element

  Scenario: Referrer email must be a valid email
    Given I select "under 18" radio button
    When I fill the "referrer-email" form element
    And I click the "submit enquiry" button
    Then I see a "Email must be a valid email address" error message on the "referrer-email" form element

  Scenario Outline: <fieldName> is populated when form is submitted with errors
    When I <action> the "<fieldName>" form element
    And I click the "submit enquiry" button
    Then the "<fieldName>" form element is <action>ed
    Examples:
      | fieldName                           | action |
      | First name                          | fill   |
      | Last name                           | fill   |
      | Email                               | fill   |
      | Phone                               | fill   |
      | How should we contact you?          | select |
      | Postcode                            | fill   |
      | interpreter-needed-primary-language | fill   |
      | How old are you?                    | select |
      | referrer-first-name                 | fill   |
      | referrer-last-name                  | fill   |
      | referrer-email                      | fill   |

   Scenario: Clicking "Submit Enquiry" does just that
     Given I have filled all the fields
     When I click the "submit enquiry" button
     # If the environment variables for SendGrid are not set, it onl,y gets as far as /send-enquiry
     Then I am on the "send enquiry" or "enquiry sent" page
