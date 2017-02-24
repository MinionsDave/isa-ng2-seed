import { IsaqaPage } from './app.po';

describe('isaqa App', () => {
  let page: IsaqaPage;

  beforeEach(() => {
    page = new IsaqaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
