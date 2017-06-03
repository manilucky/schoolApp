import { browser, by, element } from 'protractor';

export class SchoolRegPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cr-root h1')).getText();
  }
}
