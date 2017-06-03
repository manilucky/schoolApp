import { SchoolRegPage } from './app.po';

describe('school-reg App', () => {
  let page: SchoolRegPage;

  beforeEach(() => {
    page = new SchoolRegPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to cr!!'))
      .then(done, done.fail);
  });
});
