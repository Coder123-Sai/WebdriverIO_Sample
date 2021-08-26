class safeActions{
    constructor(){
    }
    click(locator_){
        const ele=$(locator_);
        ele.click();
        return this;
    }

    setValue(locator_,value_){
        const ele=$(locator_);
        ele.setValue(value_);
        return this;
    }
    verifyText(locator_,text_){
        const ele=$(locator_);
        expect(ele).toHaveTextContaining(text_);

    }

    getText(locator_){
        const ele=$(locator_);
        return ele.getText();
    }

    verifyElementNotDisplayed(locator_){
        const ele=$(locator_);
        expect(ele).not.toBeDisplayed();
    }

    verifyNoOfElements(locator_,rowsCount_){
        const ele=$$(locator_);
        expect(ele).toBeElementsArrayOfSize(rowsCount_);
    }

    clearValue(locator_){
        const ele=$(locator_);
        ele.clearValue();
        return this;
    }

    dragAndDrop(elementlocator_,targetLocator_){
        const ele=$(elementlocator_);
        const target=$(targetLocator_);
        ele.waitForDisplayed();
        target.waitForDisplayed();
        ele.dragAndDrop(target,2000);
    }

    verifyElementDisplayed(locator_){
        const ele=$(locator_);
        expect(ele).toBeDisplayed();
    }

    
}
module.exports=new safeActions();