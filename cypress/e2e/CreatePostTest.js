import LoginPage from "../support/PageClass/LoginPage";
import CreatePostPage from "../support/PageClass/CreatePostPage";

const loginver = new LoginPage();
const post = new CreatePostPage();

describe('Create a post', () => {
  let userData;

  before(() => {
    cy.fixture('testData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    loginver.login();
  });

  it('Create a post without image', () => {
    post.getCommunityTab().click();
    post.getCreatePostField().click();
    post.getWhatOnYourMindPlacehonder().type('New Post');
    post.getPostBtn().click();
    post.getToastMessage().should('be.visible');
  });

  it('Create a post by uploading an image', () => {
    // const filePath = 'test.png';
    post.getCommunityTab().click();
    post.getCreatePostField().click();
    post.getWhatOnYourMindPlacehonder().type('New Post');
    // post.getUploadImage().attachFile(filePath);
    post.getUploadImage().selectFile("cypress/fixtures/test.png")
    cy.wait(5000);
    post.getPostBtn().click();
    post.getToastMessage().should('be.visible');
  });
});