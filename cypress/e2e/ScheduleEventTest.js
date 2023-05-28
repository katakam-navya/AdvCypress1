import ScheduleEventPage from "../support/PageClass/ScheduleEventPage";
import LoginPage from "../support/PageClass/LoginPage";




const loginVer=new LoginPage()
const schedule=new ScheduleEventPage()
describe('Schedule Event',()=>{
    it('Create a schedule without invitee',()=>{

        loginVer.login()
        schedule.scheduleEvent()

    })
})