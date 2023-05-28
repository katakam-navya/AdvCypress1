# Amazon search functionality feature file

Feature: chrome Test Suite
    This feature file will validate title of home page and search functionality

    Background: setupblock
        Given User is on bing home page

    @smoke
    Scenario: Search Validation
        It will validate the search functionality
        
        When  user click on search field
        When  user types product as cypress
        When  click on search button
        Then  Search result should be displayed
        
       
       


