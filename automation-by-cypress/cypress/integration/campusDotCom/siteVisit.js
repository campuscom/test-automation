/// <reference types="cypress" />

import {LoginPage} from '../../pages/login_page';

let loginPage = new LoginPage();


  it('Admin front-end Visit and create a course ', function() {
      // admin panel visit
      cy.visit("https://admin.dev.campus4i.com")

      // userlogin
      loginPage.enterUsername("admin");
      cy.wait(600);
      loginPage.enterPassword("a123a123");
      cy.wait(600);
      loginPage.clickButton();
      cy.wait(2600);

      // access the sidenav
      cy.contains('Institution').click()
      cy.wait(600);

      cy.contains('Courses').click() 
      cy.wait(600);

      // showing the courses list
      cy.contains('Search').click() 
      cy.wait(1600);

      // creating a course
      cy.contains('+ Add new').click() 
      cy.wait(600);

      cy.get('select').eq(0).select('C4I_CP').should('have.value', '4eef001e-06a3-4cee-8c40-b6117dc985af')
      cy.wait(400)

      cy.get('#title').type("Test course from cypress")
      cy.wait(400)

      cy.get('#code').type("TCCY-88")

      cy.get('#external_id').type("8085")
      cy.wait(500)

      cy.get('#slug').type("cypress-88")
      cy.wait(500)

      cy.get('#summary').type("test summery")

})

