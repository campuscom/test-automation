/// <reference types="cypress" />

import {NewWebAdminLoginPage} from '../../pages/newWebAdminLogin';
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

let loginPage = new NewWebAdminLoginPage();


  it('Admin front-end Visit and create a course ', function() {
    // admin panel visit
    cy.visit("https://webadmin.athena.campus4i.com/")

    // userlogin
    loginPage.enterUsername("admin");
    cy.wait(600);
    loginPage.enterPassword("a123a123");
    cy.wait(600);
    loginPage.clickButton();
    cy.wait(2600);

    // access the sidenav
    cy.contains('Institute').click();
    cy.wait(600);

    cy.contains('Courses').click()
    

    // showing the courses list
    cy.contains('Search').click()
    cy.wait(3000);

    //   // creating a course
    cy.get(':nth-child(2) > .ant-btn > .anticon > svg').click()
    cy.wait(600);

    // Add course content to create a course
    cy.get('#provider').type("South{enter}")
    cy.wait(400)

    cy.get('#title').type('Test course for new Web Admin')
    cy.wait(400)

    cy.get('#code').type('tfcnwa-2022')
    cy.wait(400)

    cy.get('#external_id').type('120280320')
    cy.wait(400)

    cy.get('#slug').type("test-88")
    cy.wait(500)

    cy.get('#level').type('Intermediate{enter}')

    cy.get('#summary').type("test summery for the course")

    cy.get('#description').type('test description for the course of Test course for new Web Admin')
    cy.wait(1500)

    // cy.get('.ant-checkbox-inner').check()

    cy.contains('label', 'Content Ready').parent('div').siblings('div.ant-form-item-control').find('input').check(); 
    cy.wait(3000)

    // cy.contains('Submit').click()

})

