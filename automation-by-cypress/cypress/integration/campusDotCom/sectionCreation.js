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
    cy.visit("https://webadmin.dev.campus4i.com/")

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

    // select course for details
    cy.contains('Test course for new Web Admin').click()
    cy.wait(3000)

    // select the tab section
    cy.get('#rc-tabs-0-tab-2').click()
    cy.wait(600)

    // creating the section of the selected course
    cy.get('[style="padding-left: 2px; padding-right: 2px; flex: 0 0 auto;"] > .ant-btn').click()
    cy.wait(600)

    // filling the sections input 
    cy.get('#name').type('S1-E1')
    cy.wait(300)

    cy.get('#fee').type(0)
    cy.wait(300)

    cy.get('#seat_capacity').type(70)
    cy.wait(300)

    cy.get('#available_seat').type(70)
    cy.wait(300)

    cy.get('#execution_mode').type('Self-paced{enter}')
    cy.wait(1000)

    cy.get('#credit_hours').type(35)
    cy.wait(300)

    cy.get('#ceu_hours').type(2)
    cy.wait(300)

    // cy.get('#__start_date')
    cy.get('#__start_date').click().type('7{enter}')


})

