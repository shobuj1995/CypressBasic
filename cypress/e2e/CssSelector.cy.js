
  describe('My First Test', () => {
    it('Correct Title', () => {
      cy.visit('https://carmagic-staging.fly.dev/')
  
      cy.title().should('eq','Welcome - Carmagic')
      
    })

    it('insert Number ', () => {
        cy.visit('https://carmagic-staging.fly.dev/')
    
        cy.get("#sign_in--index_phone_number").type("4707891088")
        cy.wait(20000)
        
      })
    
  })