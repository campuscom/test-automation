/// <reference types="cypress" />

import {LoginPage} from '../../pages/login_page';

let loginPage = new LoginPage();


  it('Admin front-end Select a Course provider and showing the course  and also showing a course details ', function() {
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

    // find Courses
    cy.contains('Courses').click() 
    cy.wait(600);

    // Select the course Provider
    cy.get('select').eq(0).select('C4I_CP').should('have.value', '4eef001e-06a3-4cee-8c40-b6117dc985af')

    // Search the courses list
    cy.contains('Search').click() 
    cy.wait(1600);

    // click a course to check details
    cy.get('[data-row-key="f26a2b83-375d-4048-aa01-22f2dedb11a0"] > :nth-child(1) > .d-inline-block').click()
    cy.wait(2000)

    // check section of this course
    cy.get('#sections').should('have.id', 'sections').click()
})

