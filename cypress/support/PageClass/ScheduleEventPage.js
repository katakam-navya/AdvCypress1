class ScheduleEventPage
{
    elements={
        getCalandarIcon:()=> cy.get('[data-test="MainHeader-NotificationWrapper"] > :nth-child(2)'),
        getPlusIcon:()=> cy.get(':nth-child(3) > [data-test="Button-ButtonStyled"]'),
        clkScheduleBtn:()=> cy.get('.eqaXYa > .sc-hHTYSt > .sc-bBABsx > .sc-iveFHk'),
        enterEventName:()=> cy.get('input[name="title"]'),
        enterDes:()=>cy.get('textarea[name="description"]'),
        getEventTime:()=>cy.get('input[placeholder="HH:MM AM/PM"]'),
        SelectFirstTimeZone:()=>cy.get('div[data-test="EventTimePicker-EventTimeOption"]:first-child'),
        clkCreateEventBtn:()=>cy.get('button[data-testid="create-event-button"]'),
        verifyPublishedToastMessage:()=>cy.contains('Event Published').should('be.visible'),
        clkHostingTab:()=>cy.contains('Hosting'),
        clkGoLiveBtn:()=>cy.contains('Go Live!'),
        clkMicOffBtn:()=>cy.get('div[data-title="Mic On"]'),
        clkRaisedHandBtn:()=>cy.get('div[data-title="Raise Hand"]'),
        clkMembersTab:()=>cy.get('div[data-title="Members"]'),
        verifyStageHeaderText:()=>cy.contains('Stage').should('be.visible'),
        clkEndTheEventBtn:()=>cy.contains('End the Event'),
        clkConfirmEndEventBtn:()=>cy.contains('Yes, End the Event'),
        verifyCLoseEevntToastMessage:()=>cy.contains('Your event has been canceled.').should('be.visible')

    }
    scheduleEvent(){
        this.elements.getCalandarIcon().click()
        this.elements.getPlusIcon().click()
        this.elements.clkScheduleBtn().click()
        this.elements.enterEventName().type('Test Event')
        this.elements.enterDes().type('Welcome to my event')
        this.elements.getEventTime().click()
        this.elements.SelectFirstTimeZone().click({force:true})
        this.elements.clkCreateEventBtn().click()
        this.elements.verifyPublishedToastMessage()

        this.elements.clkHostingTab().click()
        this.elements.clkGoLiveBtn().click()
        this.elements.clkMicOffBtn().click()
        this.elements.clkRaisedHandBtn().click()
        this.elements.clkMembersTab().click()
        this.elements.verifyStageHeaderText()
        this.elements.clkEndTheEventBtn().click()
        this.elements.clkConfirmEndEventBtn().click()
        this.elements.verifyCLoseEevntToastMessage()

    }
}
export default ScheduleEventPage