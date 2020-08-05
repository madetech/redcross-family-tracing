Feature: Landing Page
  As a user
  I want to see useful things on the landing page
  So I know what to do next

  Scenario: Landing page shows correct heading
    When I visit the landing page
    Then I see "Find missing family" in the page heading


  Scenario: Landing page has make enquiry link
    When I visit the landing page
    Then I see link to "enquiry" in hero