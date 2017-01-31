import { ReseptikirjaPage } from './app.po';

describe('reseptikirja App', function() {
  let page: ReseptikirjaPage;

  beforeEach(() => {
    page = new ReseptikirjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
