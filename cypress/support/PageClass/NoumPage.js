
class NoumPage
{
    elements ={
        noumsTab: ()=> cy.contains('Noums').should('be.visible'),
        newNoumBtn: ()=> cy.contains('New Noum'),
        nameField:()=> cy.get('input[name="name"]'),
        desField:()=> cy.get('input[name="description"]'),
        
        createNoumBtn:()=> cy.get('[data-testid="Create-Noum-Button"]'),
        verifyToastMessage:()=> cy.contains('Noum Created').should('be.visible'),
        startEditingBtn:()=> cy.contains('Start Editing'),
        publishBtn:()=> cy.contains('Publish'),
        publishChangesBtn:()=> cy.get('button[data-testid="confirmChamberPublish"]'),
        publishToastMessage:()=>cy.contains('Changes have been published.')

    }

    createNoum(){
        this.elements.noumsTab().click()
        this.elements.newNoumBtn().click({force:true})
        this.elements.nameField().type('New Noum22')
        this.elements.desField().type('Hello')
       
        this.elements.createNoumBtn().click({force:true})
        this.elements.verifyToastMessage()
        this.elements.startEditingBtn().should('be.visible').click()
        this.elements.publishBtn().should('be.visible').click()
        this.elements.publishChangesBtn().should('be.visible').click()
        this.elements.publishToastMessage().should('be.visible')

    }
}
export default NoumPage