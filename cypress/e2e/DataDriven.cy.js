describe("DataDriven Testing",()=>{

    //Access through hook
    // it('Login page',()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.fixture("orangehrm").then((data)=>{
    //         cy.get("input[placeholder='Username']").type(data.username);
    //         cy.get("input[placeholder='Password']").type(data.password);
    //         cy.get('.oxd-button').click();


    //         cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
    //             .should('have.text',data.expected)
    //     })


    // })

    

    // //Acess through Hook
    // let userdata;
    // before(()=>{
    //     cy.fixture("Orangehrm").then((data)=>{
    //         userdata = data;
    //     })
    // })
    // it("fixture",()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            // cy.get("input[placeholder='Username']").type(userdata.username);
            // cy.get("input[placeholder='Password']").type(userdata.password);
            // cy.get('.oxd-button').click();


            // cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            //     .should('have.text',userdata.expected)

    // })



    //Multiple jason file 

    it.skip("Data DrivenTest with multiple data",()=>{
        cy.fixture("Orangehrm2").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userData)=>{
                cy.get("input[placeholder='Username']").type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);
                cy.get('.oxd-button').click();

                if(userData.username=="Admin"&& userData.password=="admin123"){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                    .should('have.text',userData.expected)


                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();//for logout operation
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();


    
    
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text')
                    .should('have.text',userData.expected)
    
                }

            })
            

            
        })
        
    })



//Multiple jason file data loaded before test execution
    let userdata;
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("Orangehrm2").then((data)=>{
            userdata = data;
        })
    })


    it.only("Data DrivenTest with multiple data",()=>{ 
        userdata.forEach((userData)=>{
            cy.get("input[placeholder='Username']").type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);
                cy.get('.oxd-button').click();

                if(userData.username=="Admin"&& userData.password=="admin123"){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                    .should('have.text',userData.expected)


                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();//for logout operation
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();


    
    
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text')
                    .should('have.text',userData.expected)
    
                }
            

        })
            
                       
        })
        

})