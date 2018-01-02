import { WypozyczalniaGierPage } from './app.po';

describe('wypozyczalnia-gier App', function() {
  let page: WypozyczalniaGierPage;

  beforeEach(() => {
    page = new WypozyczalniaGierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
