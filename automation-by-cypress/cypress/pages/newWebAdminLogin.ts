export class NewWebAdminLoginPage {

    loginPage_username = '#basic_username'
    loginPage_password = '#basic_password'
    loginPage_loginButton = '.ant-btn'
    
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