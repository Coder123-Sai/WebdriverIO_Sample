let homePage=require("../ActionMethods/Home_Action_Methods.js");
let data=require("../TestData/Home_Data.js");

describe('AutomationChallengeIDC', () => {

    it('Test3 - Verify Search and Table in Home Page',() => {
        //Navigate to the home page
        homePage.launchAppURL();
        // In Test 3 div search box enter value "USA"
        homePage.enterSearchValueTable(data.testData.USA);
        // Verify table displays two rows with country as USA
        homePage.verifyNoOfRowsDisplayedWithCountry(data.testData.rowsDisplayed,data.testData.USA);
        // Clear search box
        homePage.clearSearchValueTable();
        browser.refresh();
        // Verify table displays four rows
        homePage.verifyTotalNoOfRowsDisplayed(data.testData.totalRowsDisplayed);
    });
});