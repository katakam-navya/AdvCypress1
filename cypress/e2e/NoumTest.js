import LoginPage from "../support/PageClass/LoginPage";
import NoumPage from "../support/PageClass/NoumPage";

const loginVer = new LoginPage()
const noums = new NoumPage()

describe('Create Noum', () => {
  it('Create an Investment Noum', () => {
    loginVer.login();
    noums.createNoum();
    
  });
});







