let homePage=require("../ActionMethods/Home_Action_Methods.js");
let data=require("../TestData/Home_Data.js");

describe('AutomationChallengeIDC', () => {

    it('Test4 - Verify Drag And Drop in Home Page',() => {
        //Navigate to the home page
        homePage.launchAppURL();
        //In Test 4 div drag button "Drag Me" to the Red Rectangle box
        homePage.dragAndDropDragMeButton();
        //After dragging, verify if button was dragged inside the box
        homePage.verifyDragMeButtonInsideBox();
    });
});