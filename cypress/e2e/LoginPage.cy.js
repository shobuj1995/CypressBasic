describe('My First Test', () => {
    it('Correct Title', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.title().should('eq','OrangeHRM')
      
    })

    it('Click on the login button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-userdropdown-name").click()
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').contains("Logout")
        cy.xpath("(//a[normalize-space()='Logout'])[1]").contains("Logout")
        
        
        

        
      })
    
  })
  