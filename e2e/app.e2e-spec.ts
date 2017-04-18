import { ItvdnPage } from './app.po';

describe('itvdn App', () => {
  let page: ItvdnPage;

  beforeEach(() => {
    page = new ItvdnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
