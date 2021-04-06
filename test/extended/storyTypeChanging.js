import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import {fillingTheStoryTwice,inputValuesNoStory} from '../../helpers/methods';

describe('Story type', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Changing the type of the story', function () {

        it('TC - 096 Change the type of the story from "Comedy" to "Tragedy" ', function () {
            let chosenStory = fillingTheStoryTwice(story.comedy, story.tragedy);
            expect(chosenStory).toEqual(exp.tragedyLabel);

        });

        it('TC - 097 Change the type of the story from "Tragedy" to "Rags and Riches" ', function () {
            let chosenStory = fillingTheStoryTwice(story.tragedy, story.ragsAndRiches);
            expect(chosenStory).toEqual(exp.ragsAndRichesLabel);

        });

        it('TC - 098 Change the type of the story from "Rags and Riches" to "Journey and Return" ', function () {
            let chosenStory = fillingTheStoryTwice(story.ragsAndRiches, story.journeyAndReturn);
            expect(chosenStory).toEqual(exp.journeyAndReturnLabel);

        });

        it('TC - 099 Change the type of the story from "Journey and Return" to "Quest" ', function () {
            let chosenStory = fillingTheStoryTwice(story.journeyAndReturn, story.quest);
            expect(chosenStory).toEqual(exp.questLabel);

        });

        it('TC - 100 Change the type of the story from "Quest" to "Rebirth" ', function () {
            let chosenStory = fillingTheStoryTwice(story.quest, story.rebirth);
            expect(chosenStory).toEqual(exp.rebirthLabel);

        });

        it('TC - 101 Change the type of the story from "Rebirth" to "Overcoming the Monster" ', function () {
            let chosenStory = fillingTheStoryTwice(story.rebirth, story.overcomingTheMonster);
            expect(chosenStory).toEqual(exp.overcomingTheMonsterLabel);

        });

        it('TC - 102 Change the type of the story from "Overcoming the Monster" to "Comedy" ', function () {
            let chosenStory = fillingTheStoryTwice(story.overcomingTheMonster, story.comedy);
            expect(chosenStory).toEqual(exp.comedyLabel);

        });

        it('TC - 103 Story Type label is highlighted when cursor hovers on it ', function () {
            $(sel.storyType).click();
            $(sel.storyList).moveTo();
            let overcomingTheMonsterSign = $(sel.overcomingTheMonsterSign).isFocused();
            expect(overcomingTheMonsterSign).toEqual(true);

        });

        describe('Negative case for the Story Type', function () {

            it('TC - 104 Story Type field is required  ', function () {
                let negativeCase = inputValuesNoStory(name.default, gender.she, age.default);
                expect(negativeCase).toEqual(false);

            });

        });
    });
});



