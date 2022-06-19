/// <reference types="cypress" />

import {NewWebAdminLoginPage} from '../../pages/newWebAdminLogin';
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

let loginPage = new NewWebAdminLoginPage();

describe("Visit WebAdmin front-end  and create a course sections ",()=>{

  beforeEach( () => {
    // admin panel visit
    cy.visit("https://webadmin.dev.campus4i.com/")

    // userlogin
    loginPage.enterUsername("admin");
    cy.wait(600);
    loginPage.enterPassword("a123a123");
    cy.wait(600);
    loginPage.clickButton();
    cy.wait(2600);
  })




  it('Accessing the section and create a section', () => {
    

    // access the sidenav
    cy.contains('Institute').click();
    cy.wait(600);

    cy.contains('Courses').click();
    

    // showing the courses list
    cy.contains('Search').click();
    cy.wait(3500);

    // select course for details
    cy.get('#title__icontains').type("Test course for new Web Admin");
    cy.wait(1000);
    cy.contains('Search').click();
    cy.wait(2500);

    // to check the details
    cy.get('.ant-table-row > :nth-child(1)').click();
    cy.wait(600);

    // go to the sections tab
    cy.get('#rc-tabs-0-tab-2').click()
    cy.wait(300);

    //Section Creation 
    cy.get(':nth-child(2) > .ant-btn').click();
    cy.wait(2600);

    // input form fill up for section
    // sections name
    cy.get('#name').type("64121");
    cy.wait(600);

    // sections fee
    cy.get('#fee').type("10");
    cy.wait(600);

    // Seat Capacity
    cy.get('#seat_capacity').type("30");
    cy.wait(600);

    cy.get('#available_seat').type("30");
    cy.wait(600);

    // Execution Mode
    cy.get('#execution_mode').type("Self{enter}");
    cy.wait(600);

    // Credit Hours
    cy.get('#credit_hours').type("42");
    cy.wait(600);
    cy.get('#ceu_hours').type("7");
    cy.wait(500);


    // Start and End Date
    // cy.get(':nth-child(9) > [style="row-gap: 0px;"] > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').should("be.visible").should("have.class","ant-picker-cell-inner").click();
    cy.get(':nth-child(9) > [style="row-gap: 0px;"] > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click();
  })


})

  

