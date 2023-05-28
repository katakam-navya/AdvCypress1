

class LoginPage
{
    elements = {
        resolution:()=> cy.viewport(1920,1080),
        url:()=> cy.visit('https://noumena-web-staging.web.app/login').url().should('include','https://noumena-web-staging.web.app/'),
        headerText:()=> cy.contains('Log in').should('be.visible'),
        emailField:()=> cy.get('input[name="email"]'),
        loginBtn: ()=> cy.get('button[id="email-login-btn"]'),
        toastMessage: ()=> cy.contains('Verification Code Sent').should('be.visible'),
        firstOTP:()=> cy.get('input[data-cy="OtpInput-cy-0"]'),
        secondOTP:()=> cy.get('input[data-cy="OtpInput-cy-1"]'),
        thirdOTP:()=> cy.get('input[data-cy="OtpInput-cy-2"]'),
        fourthOTP:()=> cy.get('input[data-cy="OtpInput-cy-3"]'),
        nextBtn:()=> cy.contains('Next').should('be.visible'),
        verifyHomePage:()=> cy.contains('Home').should('be.visible')
    }


login(){
    this.elements.resolution()
    this.elements.url()
    this.elements.headerText()
    this.elements.emailField().type('tarika+16@noumena.global')
    this.elements.loginBtn().click()
    this.elements.toastMessage()
    this.elements.firstOTP().type('1')
    this.elements.secondOTP().type('2')
    this.elements.thirdOTP().type('3')
    this.elements.fourthOTP().type('4')
    this.elements.nextBtn().click()
    this.elements.verifyHomePage()

}
}
export default LoginPage