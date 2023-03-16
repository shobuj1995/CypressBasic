class Login
{
    setUserName(username){
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(userPassword)
    {
        cy.get("input[placeholder='Password']").type(userPassword)
    }
    ClickLoginBtn(){
        cy.get("button[type='submit']").click();
    }
    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard");
    }

}
export default Login;