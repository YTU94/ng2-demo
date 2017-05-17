import { CouldbooksPage } from './app.po';

describe('couldbooks App', () => {
  let page: CouldbooksPage;

  beforeEach(() => {
    page = new CouldbooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
