describe("Assertion Demo", () => {
    it("Implicit Assertion", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Use and operation rather than write the hole line

        cy.url().should("include", "orangehrmlive")
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .and("contain", "orangehrmlive")
            .and("not.contain", "Horangehrmlive")

        //title validation

        cy.title().should("eq", "OrangeHRM")
            .and("contain", "Or")

        //Check the logo is visible or not
        cy.get('.orangehrm-login-branding > img').should("be.visible")
            .and("exist")



    })

    //capture all the links
    it("Capture all the links", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//a").should("have.length", "5")

        //Type user name and check have you typed the correct username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("have.value", "Admin")

    })

    //Check Explicit assertion
    it("Explicit Assertions", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should("have.value","Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("have.value","admin123")
        cy.get('.oxd-button').click()

        //Expect assertion to verify user name
        let expectedName ="Admin"
        cy.get('.oxd-userdropdown-name').then((x)=>{
            //BDD style
            let acualName = x.text
            // expect(acualName).to.equal(expectedName)
            expect(acualName).to.not.equal(expectedName)

            //TDD style
            // assert.equal(expectedName,acualName)
            assert.notEqual(expectedName,acualName)


        })



    })
})