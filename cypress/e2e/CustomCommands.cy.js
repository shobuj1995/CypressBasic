//click on link using label
//Over writing existing contains() command
//re-useable custom command


describe("Custom Command",()=>{
    it.skip("handle link",()=>{
        cy.visit("https://demo.nopcommerce.com/");
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();//Without Custom Commands
        
        
        cy.clickLink("Apple MacBook Pro 13-inch");//Custom Command//just using a the link test or labeb of a link

        cy.get('h1').should("have.text","Apple MacBook Pro 13-inch")

    })
    it.only("OverWriting Existing Command",()=>{
        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("APPLE MACKBOOK PRO 13-INCH");//Custom Command//just using a the link test or labeb of a link

        cy.get('h1').should("have.text","Apple MacBook Pro 13-inch")


    })
    it("login command",()=>{

    })

})