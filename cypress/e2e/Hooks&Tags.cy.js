// const { afterEach } = require("mocha")

describe("MyTestuite",()=>{
    before(()=>{
        cy.log("This ia a before close")
    })
    after(()=>{
        cy.log("This is a after close")
    })
    beforeEach(()=>{
        cy.log("This is a beforeEach close")
    })
    afterEach(()=>{
        cy.log("this is a aftereach close")
    })

    it("Search",()=>{
        cy.log("************* Searching***********")
    })
    it("Advance Searching",()=>{
        cy.log("Advance Searching")
    })

})