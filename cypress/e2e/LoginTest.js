import LoginPage from "../support/PageClass/LoginPage";

const loginVer= new LoginPage()

describe('Login',()=>{

    it('Login with valid Credentails',()=>{

        loginVer.login()
    })
})