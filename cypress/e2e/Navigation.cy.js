describe("BrowserControl",()=>{
    it("NavigationTest",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq',"Your Store");
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should("have.text","Cameras");
        cy.go('back')//go back
        cy.title().should('eq',"Your Store");//back to home page
        cy.go('forward');//Moving forward to camera page
        cy.get('h2').should("have.text","Cameras");
        cy.wait(3000);
        cy.get('.list-group > [href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=57"]').click();


        cy.go(-2);//Home page

        cy.wait(3000);
        cy.title().should('eq',"Your Store")
        cy.go(1)//Moving forward to camera page
        cy.get('h2').should("have.text","Cameras");


        cy.reload();


    })

})