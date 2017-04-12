import { PETPage } from './app.po';

describe('pet App', () => {
  let page: PETPage;

  beforeEach(() => {
    page = new PETPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
