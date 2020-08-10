Feature: Send A Message Page
    As a user
    When I want to Send a message to my family I can find the local service

    Background:
        Given I visit the "send message to relatives" page

    Scenario: Has a back link to navigate to the what help are you looking for today page
        When I click the "back" link
        Then I am on the "what help are you looking for today" page
    
    Scenario: There is a button linking to the Red Cross "Find your local missing family service" page
        Then I see a "contact your local service for support" button linking to the "redcross find local missing family service" page