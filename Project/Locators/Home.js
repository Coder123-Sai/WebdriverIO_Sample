class LocatorHomePage{
    constructor(){
        this.openModal="//button[text()='Open Modal']";
        this.nameOpenModal="#name";
        this.cityOpenModal="#city";
        this.enterData="#enter";
        this.closeOpenModal="//button[text()='Close']";
        this.clickMeButton="//button[contains(text(),'Click Me')]";
        this.clickMeSearchBox="#myInput";
        this.keyWordDisplayed="//li[contains(text(),'<dynamic>') and not(contains(@style,'display'))]";
        this.searchValueTable="#searchMe";
        this.rowsDisplayed="//tbody[@id='someTable']/tr[not(contains(@style,'display'))]";
        this.rowsDisplayedWithCountry="//td[contains(text(),'<dynamic>')]";
        this.dragMeButton="#drag1";
        this.targetLocatorForDragMe="#div1";
        this.dragMeButtonInsideBox="//div[@id='div1']//following-sibling::button[@id='drag1']";


    }
}
module.exports=new LocatorHomePage;
