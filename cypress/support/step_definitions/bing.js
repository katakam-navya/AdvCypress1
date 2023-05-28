
import { Given,When,Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"


Before(()=>{
    cy.log("Before Hook....")
})
// hooks-> used for logs or indiacting the script files
After(()=>{
    cy.log("After Hook....")
})

Given("User is on bing home page",()=>{
    cy.visit("https://www.bing.com/")
})

When("user click on search field",()=>{
    cy.get("#sb_form_q").click({force:true})
})

When("user types product as {string}",(cypress)=>{
    cy.get("#sb_form_q").type(cypress)
})

When("click on search button",()=>{
    cy.get("#search icon tooltip").click({force:true})
    cy.wait(2000)
})

Then("Search result should be displayed",()=>{
    cy.get(".kmnrtd").then(resultobj=>{

        let count=resultobj.text()
        cy.log("Search Count =" +count)
        })
})




