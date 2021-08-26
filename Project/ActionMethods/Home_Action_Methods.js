let safeActions=require("../SafeActions.js");
let homePageLocators=require("../Locators/Home.js")
class HomeActionMethods{
    constructor(){
    }
    /**
     * @Performs
     *      Launches the app URL in browser.
     * @returns 
     */
    launchAppURL(){
        browser.url("file:///C:/WebdriverIO/ApplicationURL/index.html");
        return this;
    }

    /**
     * @Performs
     *      Clicks open modal in Home page.
     * @returns 
     */
    clickOpenModal(){
        safeActions.click(homePageLocators.openModal);
        return this;
    }
    /**
     * @Performs
     *      Enters open modal name in home page.
     * @param {*} text_ 
     * @returns 
     */
    enterOpenModalName(text_){
        safeActions.setValue(homePageLocators.nameOpenModal,text_);
        return this;
    }
    
    /**
     * @Performs
     *      Enters open modal city in home page.
     * @param {*} text_ 
     * @returns 
     */
    enterOpenModalCity(text_){
        safeActions.setValue(homePageLocators.cityOpenModal,text_);
        return this;
    }
    /**
     * @Performs   
     *      Click enter data button in open modal.
     * @returns 
     */
    clickEnterData(){
        safeActions.click(homePageLocators.enterData);
        return this;
    }
    /**
     * @Performs
     *      CLicks close button in open modal.
     * @returns 
     */
    clickCloseOpenModal(){
        safeActions.click(homePageLocators.closeOpenModal);
        return this;
    }
    /**
     * @Performs
     *      Verifies the text for the locator passed in params.
     * @param {*} locator_ 
     * @param {*} text 
     * @returns 
     */
    verifyValueEnteredInTextBoxes(locator_,text){
        safeActions.verifyText(locator_,text);
        return this;
    }
    /**
     * @Performs
     *      CLicks Click Me button in Home page.
     * @returns 
     */
    clickClickMeButton(){
        safeActions.click(homePageLocators.clickMeButton);
        return this;
    }
    
    /**
     * @Performs
     *      Fetches text from home page for the locator given in params.
     * @param {*} locator_ 
     */
    getTextFromHomePage(locator_){
        let text=safeActions.getText(locator_);
        console.log(text);
    }
    /**
     * @Perfroms
     *      Verifies the multiple text displayed in Home page.
     * @param {*} locator 
     * @param {*} text 
     * @returns 
     */
    verifyDropDownOptions(locator,text){
        for(let i=0;i<text.length;i++){
            safeActions.verifyText(locator,text[0])
        }
        return this;
        
    }
    /**
     * @Performs
     *      Sets the value for search box inside Click Me in home page.
     * @param {*} keyword 
     * @returns 
     */
    enterKeyWordClickMe(keyword){
        safeActions.setValue(homePageLocators.clickMeSearchBox,keyword);
        return this;
    }
    /**
     * @Performs
     *      Verifies the keyword displayed in Click Me home page.
     * @param {*} keyWord 
     */
    verifyKeyWordValuesDisplayed(keyWord){
        for(let i=0;i<keyWord.length;i++)
        {
            safeActions.verifyText(homePageLocators.keyWordDisplayed.replace("<dynamic>",keyWord[i]),keyWord[i]);
            console.log(keyWord[i]+"is present in home page");
        }
    }
    /**
     * @Performs
     *      Verifies the key word not displayed in Click Me Home page.
     * @param {@} keyWord 
     */
    verifyKeyWordValueNotDisplayed(keyWord){
        for(let i=0;i<keyWord.length;i++)
        {
            safeActions.verifyElementNotDisplayed(homePageLocators.keyWordDisplayed.replace("<dynamic>",keyWord[i]));
            console.log(keyWord[i]+"is not Displayed in home page");
        }
    }
    /**
     * @Performs
     *      Sets the search value in search and table field in home page.
     * @param {*} value 
     * @returns 
     */
    enterSearchValueTable(value){
        safeActions.setValue(homePageLocators.searchValueTable,value);
        return this;
    }
    /**
     * @Performs
     *      Clears the search value in search and table field in home page.
     * @returns 
     */
    clearSearchValueTable(){
        safeActions.clearValue(homePageLocators.searchValueTable);
        return this;
    }

    /**
     * @Performs
     *      Verifies the no of rows displayed with country in Home page.
     * @param {*} rowsCount 
     * @param {*} country 
     * @returns 
     */
    verifyNoOfRowsDisplayedWithCountry(rowsCount,country){
        let rowsDisplayedWithCountry=homePageLocators.rowsDisplayedWithCountry.replace("<dynamic>",country);
        safeActions.verifyNoOfElements(homePageLocators.rowsDisplayed+rowsDisplayedWithCountry,rowsCount);
        return this;
    }
    /**
     * @Performs
     *      Verifies the total no of rows displayed under Search and table in home page.
     * @param {*} rowsCount 
     * @returns 
     */
    verifyTotalNoOfRowsDisplayed(rowsCount){
        safeActions.verifyNoOfElements(homePageLocators.rowsDisplayed,rowsCount);
        return this;
    }
    /**
     * @Performs
     *      Drags Drag Me button and drops inside the rectangular box.
     * @returns 
     */
    dragAndDropDragMeButton(){
        safeActions.dragAndDrop(homePageLocators.dragMeButton,homePageLocators.targetLocatorForDragMe);
        return this;
    }
    /**
     * @Performs
     *      Verifies the Drag Me button is inside Rectangular box.
     * @returns 
     */
    verifyDragMeButtonInsideBox(){
        safeActions.verifyElementDisplayed(homePageLocators.dragMeButtonInsideBox);
        return this;
    }



}
module.exports=new HomeActionMethods();