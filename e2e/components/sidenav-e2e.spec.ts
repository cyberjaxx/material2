import {browser, by, element, ElementFinder} from 'protractor';

describe('sidenav', () => {
  describe('opening and closing', () => {
    let sidenav: ElementFinder;

    beforeEach(() => {
      browser.get('/sidenav');
      sidenav = element(by.tagName('md-sidenav'));
    });

    it('should be closed', () => {
      expect(sidenav.isDisplayed()).toBeFalsy();
    });

    it('should open', () => {
      element(by.buttonText('Open sidenav')).click();
      expect(sidenav.isDisplayed()).toBeTruthy();
    });

    it('should close again', () => {
      element(by.buttonText('Open sidenav')).click();
      element(by.buttonText('Open sidenav')).click();
      expect(sidenav.isDisplayed()).toBeFalsy();
    });
  });
});
