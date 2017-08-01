import { MyFirstNgProjectPage } from './app.po';

describe('my-first-ng-project App', () => {
  let page: MyFirstNgProjectPage;

  beforeEach(() => {
    page = new MyFirstNgProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
