Feature: Landing Page
  As a user
  I want to see useful things on the landing page
  So I know what to do next

  Background:
    When I visit the "landing" page

  Scenario: Landing page shows correct heading
    Then I see "Find missing family" in the page heading

  Scenario Outline: Has enquiry button in the "<element>" element which navigates to the enquiry page
    When I click the "make an enquiry" button in the "<element>" element
    Then I am on the "make an enquiry" page
    Examples:
      | element |
      | hero    |
      | content |
