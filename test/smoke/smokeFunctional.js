import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Required fields and Story Created', function () {

    before('Open App', function () {
        browser.url(''); //open baseUrl
    });

    it('TC-026 Submit button is enabled after fields 1-4 are field in with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();

        browser.pause(2000);

        let submitButton = $(sel.submitButton).isEnabled();
        expect(submitButton).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        inputValues4 (name.default, gender.she, age.default, story.comedy);
        browser.pause(2000);

        // $(sel.name.js).setValue(name.js.default);
        // $$(sel.radioButtons)[gender.she].click();
        // $(sel.age).setValue(age.default);
        // $(sel.storyType).click();
        // $$(sel.storyList)[story.comedy].click();
        $(sel.submitButton).click();
        let tryAgainButton = $(sel.tryAgainButton).isDisplayed();
        expect(tryAgainButton).toEqual(true);

    });

});