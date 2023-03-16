class Login
{
    S_Username="input[placeholder='Username']";
    S_UserPassword="input[placeholder='Password']";
    S_SubmitBtn="button[type='submit']";
    S_LbVerify=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    setUserName(username){
        cy.get(this.S_Username).type(username)
    }
    setPassword(userPassword)
    {
        cy.get(this.S_UserPassword).type(userPassword)
    }
    ClickLoginBtn(){
        cy.get(this.S_SubmitBtn).click();
    }
    verifyLogin(){
        cy.get(this.S_LbVerify).should("have.text","Dashboard");
    }

}
export default Login;