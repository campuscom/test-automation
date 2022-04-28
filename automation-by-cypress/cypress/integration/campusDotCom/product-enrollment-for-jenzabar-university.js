/// <reference types="cypress" />

// import cypress from 'cypress';
// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false
// })



  it('A product enrollment for jenzabar university ', function() {
    // To visit product enrollment 
    cy.visit("https://enrollment.dev.campus4i.com/checkout/jenzabar-university?product=1164ce88-1be8-453d-b38a-f07734300ec6&guest=true")
    cy.wait(2000)
    cy.get('.cookie-consent__action-block > .btn').click();
    cy.wait(1000)

    // Product summery
    cy.contains('Next').click();
    cy.wait(500)

    // userform    
    cy.get(':nth-child(1) > .form-group > .form__field > .form-control').type("Student");
    cy.get(':nth-child(2) > .form-group > .form__field > .form-control').type("H.Two");
    cy.get(':nth-child(3) > .form-group > .form__field > .form-control').type("student.h.two@mail.com");
    cy.get(':nth-child(4) > .form-group > .form__field > .form-control').type("student.h.two@mail.com");
    cy.wait(1000);

    // Next to Invoice
    cy.get(':nth-child(2) > .collapse > :nth-child(1) > .mt-4 > .mt-3 > .btn').should('not.be.disabled').click();
    cy.wait(1000);

    // Next to Payment
    cy.get(':nth-child(3) > .collapse > :nth-child(1) > .mt-4.row > .mt-3 > .btn').should('have.class', 'btn-primary').click();

    // Fill payment info
    cy.get('#cardNumber').type("4111111111111111");
    cy.wait(500)

    cy.get('#expiryDate').type("11/25");
    cy.wait(500);

    cy.get('#cvc').type("123");
    cy.wait(500)

    cy.get('#zip').type("01430");
    cy.wait(500)

    cy.get('.ml-0 > .form__label').click();
    cy.wait(1000) 

    // Click to pay
    cy.get('.mt-4 > .btn').should("have.class", "btn-primary");
})

