import sel from "../data/selectors";

function inputValues4 (name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputValuesNoStory (name, gender, age) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    return $(sel.submitButton).isEnabled();

}

function clearName() {
    let el = $(sel.name).getValue();
    for (let i = 0; i < el.length; i++)
        $(sel.name).keys(['Backspace']);
}
function fillingTheStory(storyT){
    $(sel.storyType).click();
    $$(sel.storyList)[storyT].click();
    return $(sel.storyType).getText();
}
function collapsedDropdown (storyT){
    $(sel.storyType).click();
    $$(sel.storyList)[storyT].click();
    return $(sel.dropDownMenu).isDisplayed();
}
function fillingTheStoryTwice(story1, story2) {
    $(sel.storyType).click();
    $$(sel.storyList)[story1].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story2].click();
    return $(sel.storyType).getText();
}

// function storyType(story){
//     $(sel.storyType).click();
//     $$(sel.storyList)[story].click();
//     $(sel.storyType).click();
//     const nextStory = $$(sel.storyList)[story].nextElementSibling.click();
//
// }

module.exports = {inputValues4,fillingTheStory,collapsedDropdown, fillingTheStoryTwice, inputValuesNoStory};
