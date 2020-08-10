Feature: Enquiry Page
  As a user
  When something goes wrong
  I want to see a helpful error page

  Scenario: Page not found
    Given I visit a page which does not exist
    Then I see "Page Not Found" in the page heading
    And the status code is 404
