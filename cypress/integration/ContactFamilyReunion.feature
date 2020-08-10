Feature: Contact Family Renuion Page
    As a user
    When I want to contact my family I can find the local service

    Background:
        Given I visit the "family reunion" page

    Scenario: Progression Bar shows first dot
      Then the progression bar is at "what we do"

    Scenario: Has a back link to navigate to the what help are you looking for today page
        When I click the "back" link
        Then I am on the "what help are you looking for today" page

  Scenario: There is a button linking to the Red Cross "Find your local missing family service" page
    Then I see a "contact your local service for support" button linking to the "redcross find local missing family service" page
