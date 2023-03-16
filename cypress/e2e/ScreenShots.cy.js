describe("Mysuite",()=>{
    it("Capture Screen shots and videos",()=>{
        cy.visit("https://demo.opencart.com/")
        // cy.screenshot("Homepage");
        // cy.get('#logo > a > .img-fluid').screenshot("Logo")

        //Automatically capture screenshot & video on failure -- only execute through CLI

        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should("have.text","123123")

    })
})