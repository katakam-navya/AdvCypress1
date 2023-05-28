

import InstantEventPage from "../support/PageClass/InstantEventPage";
import LoginPage from "../support/PageClass/LoginPage";



const loginVer = new LoginPage()
const event= new InstantEventPage()

describe('Instant Event',()=>{

    beforeEach(()=>{
        loginVer.login()
    });

    it('Create a Instant Event without invitee', ()=>{

        // loginVer.login()
        event.instantEvent()
    })

it('Create a Instant event with attendees',()=>{
    // loginVer.login()
    event.instantEventWithAttendees()
})
})