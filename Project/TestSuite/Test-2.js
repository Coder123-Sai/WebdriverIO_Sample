let homePage=require("../ActionMethods/Home_Action_Methods.js");
let data=require("../TestData/Home_Data.js");

describe('AutomationChallengeIDC', () => {

    it('Test2 - Verify Click Me in Home Page',() => {
        //Navigate to the home page
        homePage.launchAppURL();
        // In Test 2 div click on "Click Me"
        homePage.clickClickMeButton();
        // Verify and print all the available options
        homePage.getTextFromHomePage(data.testData.clickMedropDownKeywordLocator)
        homePage.verifyDropDownOptions(data.testData.clickMedropDownKeywordLocator,data.testData.dropdownValues);
        // Search for the keyword "Angular"
        homePage.enterKeyWordClickMe(data.testData.AngularKeyWord);
        // Verify two options are visible as "Angular" and "Angular 2"
        homePage.verifyKeyWordValuesDisplayed(data.testData.AngularKeyWordsDisplayed);
         // Clear the search box and type "ReactJs"
        homePage.enterKeyWordClickMe(data.testData.ReactJsKeyWord);        
        // Verify no option is visible
        homePage.verifyKeyWordValueNotDisplayed(data.testData.dropdownValues);
    });
});