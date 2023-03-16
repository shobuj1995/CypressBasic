describe('Handle Table',(()=>{
    beforeEach('login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type("demo");
        cy.get("input[placeholder='Password']").type("demo");
        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click();
        cy.get('#menu-customer > .parent').click()
        cy.get('#collapse-5 > :nth-child(1) > a').click()
        cy.get('#header-logout > .nav-link > .d-none').should("contain","Logout");


    })
    it.skip('Check Number Rows and Columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',"10")
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',"7")

    })
    it.skip('Check cell data from specific Rows and Columns',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)')
        .contains("gorankrezic90@gmail.com");
    
        
    })
    it.skip('Read all the rows and columns data in the first page',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td')
                        .each(($col,index,$cols)=>{
                            cy.log($col.text());

                        })
                })
            })
            
            
        })
        
    
    it.only('pagination',()=>{

        // let totalPages;
        // cy.get(".col-sm-6.text-end").then((e)=>{
        //     let myText= e.text(); //it will store the hole value(Showing 1 to 10 of 10708 (1071 Pages))
        //     totalPages= myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1);
        //     cy.log('Total Number of Pages=====>'+totalPages);


        // })
        let totalPages = 5;
        for(let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log("Active page is==="+p);
                cy.get('ul[class="pagination"]>li:nth-child('+p+')').click();
                cy.wait(300);

                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                    .each(($row,index,$rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-child(3)').then((e)=>{
                                cy.log(e.text());
                            })

                        })
                    })
            }

        }



        
    })
}))