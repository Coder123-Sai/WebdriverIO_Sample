let homePage=require("../ActionMethods/Home_Action_Methods.js");
let data=require("../TestData/Home_Data.js");

describe('AutomationChallengeIDC', () => {
    it('Test1 - Verify Open Modal in Home Page',() => {
        //Navigate to the home page
        homePage.launchAppURL();
        // In Test 1 div click the "Open Modal" Button
        homePage.clickOpenModal();
        // Enter values for Name and City
        homePage.enterOpenModalName(data.testData.name);
        homePage.enterOpenModalCity(data.testData.city);
        // Click the "Enter Data" Button
        homePage.clickEnterData();
        // Close the Modal
        homePage.clickCloseOpenModal();
        // Verify values under Open Modal button that were entered in the textboxes
        homePage.verifyValueEnteredInTextBoxes(data.testData.nameDisplayedLocator,data.testData.name);
        homePage.verifyValueEnteredInTextBoxes(data.testData.cityDisplayedLocator,data.testData.city);
    });
});