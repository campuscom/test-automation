/// <reference types="cypress" />

import {NewWebAdminLoginPage} from '../../pages/newWebAdminLogin';

let loginPage = new NewWebAdminLoginPage();


  it('Admin front-end Visit and create a course ', function() {
      // admin panel visit
      cy.visit("https://ant.design/components/date-picker/")

      cy.get('#components-date-picker-demo-basic > .code-box-demo > .ant-space > :nth-child(1) > .ant-picker > .ant-picker-input > input').dblclick();

      // userlogin
    //   loginPage.enterUsername("admin");
    //   cy.wait(600);
    //   loginPage.enterPassword("a123a123");
    //   cy.wait(600);
    //   loginPage.clickButton();
    //   cy.wait(2600);

    // // access the sidenav
    // cy.contains('Institute').click();
    // cy.wait(600);

    // cy.get('#-institute-course').click()

    // showing the courses list
    // cy.get('#d1a9e945-e5ec-4e8e-8058-001088282f9c > .ant-row-end > :nth-child(2) > .ant-btn').click(); 
    // cy.wait(1600);

    //   // creating a course
    //   cy.contains('+ Add new').click() 
    //   cy.wait(600);

    //   cy.get('select').eq(0).select('C4I_CP').should('have.value', '4eef001e-06a3-4cee-8c40-b6117dc985af')
    //   cy.wait(400)

    //   cy.get('#title').type("Test course from cypress")
    //   cy.wait(400)

    //   cy.get('#code').type("TCCY-88")

    //   cy.get('#external_id').type("8085")
    //   cy.wait(500)

    //   cy.get('#slug').type("cypress-88")
    //   cy.wait(500)

    //   cy.get('#summary').type("test summery")

})

