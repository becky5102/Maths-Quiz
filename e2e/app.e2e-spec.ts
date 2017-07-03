import { MathsPage } from './app.po';

describe('maths App', () => {
  let page: MathsPage;

  beforeEach(() => {
    page = new MathsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
