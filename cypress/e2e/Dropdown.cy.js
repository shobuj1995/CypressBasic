// const { describe } = require("mocha");

describe("Handle Dropdown",()=>{
    it.skip("dropdown with select",()=>{   // Skip will skip this test 
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select("Italy")
        .should("have.value","Italy")

    })
    it.skip("Dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type("India").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text","British Indian Ocean Territory")//for the botstrap dropdown we should type have.txt rather have.value



    })

    //Auto suggested dropdown
    it.skip("Auto suggested dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Bangladesh")
        cy.get(".suggestion-title").contains("Premier League").click()

        


    })
      //Dynamic  dropdown
      it("Dynamic dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get('.gLFyf').type("Bangladesh")
        cy.wait(300)

        // cy.get(':nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span').contains("বাংলাদেশ প্রতিদিন").click()
        // cy.get(".suggestion-title").contains("Premier League").click()
        cy.get("div.wM6W7d>span").should('have.length',11)
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
            if($el.text()=="বাংলাদেশের মানচিত্র"){
                cy.wrap($el).click()
            }
        })
        cy.get('.gLFyf').should('have.value','বাংলাদেশের মানচিত্র')
        


    })
})