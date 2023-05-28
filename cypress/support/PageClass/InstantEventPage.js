

class InstantEventPage
{
    elements ={
        getCalandarIcon:()=> cy.get('[data-test="MainHeader-NotificationWrapper"] > :nth-child(2)'),
        getPlusIcon:()=> cy.get(':nth-child(3) > [data-test="Button-ButtonStyled"]'),
        getStartNowBtn:()=>cy.contains('Start now'),
        getStartEventBtn:()=>cy.contains('Start Event'),
        getEndEventBtn:()=>cy.contains('End the Event'),
        getConfirmEndEventBtn:()=> cy.contains('Yes, End the Event'),
        verifyToastMessage:()=>cy.contains('Your event has been canceled.').should('be.visible'),
        getSearchField:()=>cy.get('input[placeholder="Select member(s) to invite"]'),
        selectMonsterKing:()=>cy.contains('Monster King')

    }
    instantEvent(){
        this.elements.getCalandarIcon().click()
        this.elements.getPlusIcon().click()
        this.elements.getStartNowBtn().click()
        this.elements.getStartEventBtn().click()
        this.elements.getEndEventBtn().click()
        this.elements.getConfirmEndEventBtn().click()
        this.elements.verifyToastMessage()
    }

    instantEventWithAttendees(){
        this.elements.getCalandarIcon().click()
        this.elements.getPlusIcon().click()
        this.elements.getStartNowBtn().click()
        this.elements.getSearchField().type('tarika+18@noumena.global')
        this.elements.selectMonsterKing().click()
        this.elements.getStartEventBtn().click()
        this.elements.getEndEventBtn().click()
        this.elements.getConfirmEndEventBtn().click()
        this.elements.verifyToastMessage()
    }
}

export default InstantEventPage