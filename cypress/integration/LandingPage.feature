Feature: Landing Page
  As a user
  I want to see useful things on the landing page
  So I know what to do next

  Scenario: Landing page shows correct heading
    When I visit the landing page
    Then I see "Find missing family" in the page heading

  Scenario: Landing page has make enquiry button
    When I visit the landing page
#    Then I see link to "enquiry" in hero
    And I see a "Make an enquiry" button linking to the "Make an enquiry" page in the "hero" element
    And I see a "Make an enquiry" button linking to the "Make an enquiry" page in the "content" element
