export class LoginPage {

    loginPage_username = '#username'
    loginPage_password = '#password'
    loginPage_loginButton = '.bx--btn--primary'
    
    // navigate(url: string){
    //     cy.visit(url);
    // }
    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username);
    }
    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password);
    }
    clickButton(){
        cy.get(this.loginPage_loginButton).click();
    }

}