// const cypress = require("cypress")
// const{it} = require("mocha")

describe("Alerts",()=>{
    //Alert
    it.skip("Js Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get('#result').should("contain","You successfully clicked an alert")
    })

    //Confirm Alert
    it.skip("Js Confirm Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })
        cy.get("#result").should('have.text',"You clicked: Ok")
        
    })

    it.skip("Js  Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })
        cy.on('window:confirm',()=>false);//Cypress will close using cancel button
        cy.get("#result").should('have.text',"You clicked: Cancel")
        
    })

    //Promt Alert
    it.skip("Js Prompt Alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns('welcome');

        })
        cy.get(':nth-child(3) > button').click()
        cy.on('window:prompt',()=>false)
        //Cypress will automatically close prompt alert - it will use OK button-by deafult
        cy.get('#result').should("have.text","You entered: welcome");
        
        
    })
    //Authenticated alert
    it.only("Js Prompt Alert",()=>{
        //arroach1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
        //                                                                      {
        //                                                                         username: "admin",
        //                                                                         password: "admin"
        //                                                                     }
        //                                                                 });
        // cy.get("div[class='example'] p").should("have.contain","Congratulations!")

        //approach 2
        cy.get("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain","Congratulations!");


        
        
    })




    


})