import Login from "../PageObjects/LoginPage2" 
describe('POM',()=>{
    let userData;
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("Orangehrm").then((data)=>{
            userData=data;
        })
    })

    it("Login Test",()=>{
    
        const object = new Login();
        object.setUserName(userData.username);
        object.setPassword(userData.password)
        object.ClickLoginBtn();
        object.verifyLogin();
           
     
        
 
     })
   

})