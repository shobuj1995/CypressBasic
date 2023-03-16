import 'cypress-iframe'

describe("handling Frames",()=>{
    // //approach1
    // it("approach1",()=>{
    //     cy.visit("https://the-internet.herokuapp.com/iframe")
    //     const iframe=cy.get("#mce_0_ifr")
    //         .its('0.contentDocument.body')
    //         .then(cy.wrap);

    //         iframe.clear().type("Welcome{ctrl+a}");
    //         cy.get('[aria-label="Bold"]').click();


    // })

    //approach2
    it.skip("approach2-by using custom command",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome{ctrl+a}");
        cy.get('[aria-label="Bold"]').click();


    })

    //approach3
    it.only("approach2-by using cypress iframe plugin",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr");//load the frame
        cy.iframe("#mce_0_ifr").clear().type("Welcome{ctrl+a}");
        cy.get('[aria-label="Bold"]').click();





    })




})