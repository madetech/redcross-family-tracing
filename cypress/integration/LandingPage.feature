Feature: Landing Page
  As a user
  I want to see useful things on the landing page
  So I know what to do next

  Background:
    When I visit the "landing" page

  Scenario: Landing page shows correct heading
    Then I see "Find missing family" in the page heading

  Scenario: Landing page has make enquiry button
    Then I see a "make an enquiry" button linking to the "make an enquiry" page in the "hero" element
    And I see a "make an enquiry" button linking to the "make an enquiry" page in the "content" element

  Scenario Outline: Clicking the enquiry button in the "<element>" element navigates to the enquiry page
    When I click the "make an enquiry" button in the "<element>" element
    Then I am on the "make an enquiry" page
    Examples:
      | element |
      | hero    |
      | content |
