import { TODOListPage } from './app.po';

describe('todolist App', function() {
  let page: TODOListPage;

  beforeEach(() => {
    page = new TODOListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
