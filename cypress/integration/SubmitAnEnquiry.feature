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
    Then I see the "referrer-relationship" radio group with the following options:
      | Legal professional or advisor |
      | Social worker                 |
      | Friend or family              |
      | Other                         |
    Then I see the "Referrer's email address" text input

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

  Scenario Outline: <fieldName> is must be a valid email
    When I fill the "<fieldName>" form element
    And I click the "submit enquiry" button
    Then I see a "<fieldName> must be a valid email address" error message on the "<fieldName>" form element
    Examples:
      | fieldName                           |
      | Email                               |
      | Referrer's email address            |

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
      | referrer-relationship               | select |
      | Referrer's email address            | fill   |

  # Todo: validate email adddresses

  # Todo: Fill out form, figure out what the "then" should be
  # Scenario: Clicking "Submit Enquiry" does just that
  #   When I click the "submit enquiry" button
  #   Then I am on the "send enquiry" page
