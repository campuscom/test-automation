/// <reference types="cypress" />

it('learning assertions', () => {
    cy.visit("https://example.cypress.io");
    cy.contains('get').click();

    cy.get("#query-btn")
      .should("contain", "Button")
      .should("have.class", "query-btn btn btn-primary")
      .should('be.visible')
      .should('be.enabled')
    
    cy.get("#query-btn").invoke('attr', 'id')
      .should("equal", "query-btn")

    cy.get("#query-btn")
      .should("contain", "Button")
      .and('have.class', 'query-btn btn btn-primary')

    // Explicit assertions
    // expect
    expect(true).to.be.true


    // assert 
    assert.equal(7, 7, 'Not Equal')
})