import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should create a result', () => {
        page.navigateTo();
        page.selectDiceNumber(99);
        page.selectDiceType(99);
        page.roll();
        expect(page.getResult()).toBeGreaterThan(0);
    });

});
