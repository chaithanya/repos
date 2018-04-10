import { TrainingDemoPage } from './app.po';

describe('training-demo App', () => {
  let page: TrainingDemoPage;

  beforeEach(() => {
    page = new TrainingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
