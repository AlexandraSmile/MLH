import sel from '../../data/selectors';
import exp from '../../data/expected.json'
import {story} from "../../data/testData";

describe('Type of the story', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('TC - 082 Choose only one story type at a time "Overcoming the Monster" ', function () {
        $(sel.storyType).click();
        browser.pause(2000);
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let overcomingTheMonsterLabel = $(sel.overcomingTheMonsterLabel).getText();
        expect(overcomingTheMonsterLabel).toEqual(exp.overcomingTheMonsterLabel);

    });
    it('TC - 083 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        browser.pause(2000);
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 084 Choose only one story type at a time "Rebirth" ', function () {
        $(sel.storyType).click();
        browser.pause(2000);
        $$(sel.storyList)[story.rebirth].click();
        let rebirthLabel = $(sel.rebirthLabel).getText();
        expect(rebirthLabel).toEqual(exp.rebirthLabel);

    });
    it('TC - 085 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 086 Choose only one story type at a time "Quest" ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let questLabel = $(sel.questLabel).getText();
        expect(questLabel).toEqual(exp.questLabel);

    });
    it('TC - 087 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 088 Choose only one story type at a time "Journey and Return" ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let journeyAndReturnLabel = $(sel.journeyAndReturnLabel).getText();
        expect(journeyAndReturnLabel).toEqual(exp.journeyAndReturnLabel);

    });
    it('TC - 089 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 090 Choose only one story type at a time "Rags and Riches" ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let ragsAndRichesLabel = $(sel.ragsAndRichesLabel).getText();
        expect(ragsAndRichesLabel).toEqual(exp.ragsAndRichesLabel);

    });
    it('TC - 091 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 092 Choose only one story type at a time "Tragedy" ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let tragedyLabel = $(sel.tragedyLabel).getText();
        expect(tragedyLabel).toEqual(exp.tragedyLabel);

    });
    it('TC - 093 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });
    it('TC - 094 Choose only one story type at a time  "Comedy" ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let comedyLabel = $(sel.comedyLabel).getText();
        expect(comedyLabel).toEqual(exp.comedyLabel);

    });
    it('TC - 095 The dropdown is in a collapsed way', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let dropDownMenu = $(sel.dropDownMenu).isDisplayed();
        expect(dropDownMenu).toEqual(false);

    });

});

