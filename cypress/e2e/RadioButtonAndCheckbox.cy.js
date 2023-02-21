
describe('My First Test', () => {

    it('Test the radio button', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //Checking the radio button is visible or not
        cy.get("input[value='option1']").should("be.visible")
        cy.get("input[value='option2']").should("be.visible")

        //Select the radio button
        cy.get("input[value='option2']").check().should("be.visible")
        cy.get("input[value='option1']").should("not.be.checked")


        cy.get("input[value='option1']").check().should("be.visible")
        cy.get("input[value='option2']").should("not.be.checked")



    
        
      })
      
    it('Action for Checkbox', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //Checking the  checkbox is visible or not
        cy.get('#monday').should('be.visible')

        //Check the checkbox
        cy.get('#monday').check().should("be.checked")

        //uncheck the checkbox
        cy.get('#monday').uncheck().should("not.be.checked")

        //selecting all elements
        // cy.get("input.form-check-input[type*='checkbox']").check().should("be.checked")

        //select the first checkbox and last checkbox
        cy.get("input.form-check-input[type*='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type*='checkbox']").last().check().should("be.checked")

        



    
        
      })
    
  })
  