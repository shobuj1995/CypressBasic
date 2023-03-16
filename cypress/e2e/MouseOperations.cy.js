
import"cypress-iframe"
require('@4tw/cypress-drag-drop')// Drag&Drop Plugin
describe("Mouse Operations",()=>{
    // beforeEach("Open Application",()=>{
    //     cy.visit("https://demo.opencart.com/")
    // });

    

    it.skip("MouseHover",()=>{
        //  cy.get(#narbar-menu > ul > li:nth-child(1) > a).trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();//Mouse Hover action

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');

    });
    it.skip("Right Clcik",()=>{
        //Approach1
        // cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('.context-menu-icon-copy')
        // .should('be.visible');

        //Approach2
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy')
        .should('be.visible');



    });
    it.skip("Double Click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.frameLoaded("iframe[name='iframeResult']");//Load the frame
        // cy.iframe("iframe[name='iframeResult']").find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.get("body > button").dblclick();
        


    });
    it("Drag&Drop",()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box3').drag("#box103",{force:true})// Forcefully do the drag and drop



    });
    it.only("Scroll the page",()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')



        //Scroll down
        cy.get(':nth-child(1) > tbody > :nth-child(46) > :nth-child(2)').scrollIntoView({duration:2000});//duration will make it little slower.
        cy.get(':nth-child(1) > tbody > :nth-child(46) > :nth-child(2)').should("be.visible")

        //Scrollup
        cy.get(':nth-child(1) > tbody > :nth-child(5) > :nth-child(2)').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(5) > :nth-child(2)').should("be.visible");

    });


})