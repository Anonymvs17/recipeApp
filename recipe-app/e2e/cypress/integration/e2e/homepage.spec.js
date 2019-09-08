context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('create recipe button is present', () => {
    // https://on.cypress.io/hash
    cy.get('app-recipe .btn').should('have.text', 'New recipe').should('be.visible');
    cy.get('.atm-detail').should('contain.text', 'Details')
  })
})
