import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo(): Promise<any> {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText(): Promise<string> {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    roll() {
        return element(by.id('dice-roll-button')).click() as Promise<void>;
    }

    selectDiceType(diceType: number): Promise<void> {
        return element(by.id('dice-' + diceType + '-button')).isPresent().then(isPresent => {
            if (isPresent) {
                return element(by.id('dice-' + diceType + '-button')).click() as Promise<void>;
            } else {
                return element(by.id('dice-type-other-button')).click().then(
                    () => element(by.id('dice-value-input')).clear().then(
                        () => element(by.id('dice-value-input')).sendKeys(diceType))
                );
            }
        }) as Promise<void>;
    }

    selectDiceNumber(diceNumber: number): Promise<void> {

        return element(by.id('dice-number-' + diceNumber + '-button')).isPresent().then(isPresent => {
            if (isPresent) {
                return element(by.id('dice-number-' + diceNumber + '-button')).click() as Promise<void>;
            } else {
                return element(by.id('dice-number-other-button')).click().then(
                    () => element(by.id('dice-number-input')).clear().then(
                        () => element(by.id('dice-number-input')).sendKeys(diceNumber))
                );
            }
        }) as Promise<void>;
    }

    getResult(): Promise<string> {
        return element(by.id('dice-result-text')).getText() as Promise<string>;
    }
}
