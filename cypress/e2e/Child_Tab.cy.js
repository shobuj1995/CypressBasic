describe("handle child tab approach1",()=>{
    it("Approach1",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        //Operation
        cy.go('back')//back to the present tab

    })
    it("Approach2",()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/windows")
        cy.get('.example > a').then((e)=>{
            let url=e.prop('href');
            cy.visit(url);
        })
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        cy.wait(5000)
        //Operation
        cy.go('back')//back to the present tab

    })

})