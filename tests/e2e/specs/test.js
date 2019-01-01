describe('Negotiation app', () => {
  it('should show success! if the employee number is less than the employer number', () => {
    cy.visit('/');

    cy.get('.tab').contains('Employer').click();
    cy.get('input').filter(':visible').type('100');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.tab').contains('Employee').click();
    cy.get('input').filter(':visible').type('90');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.result').should('contain', 'Success!');
  });

  it('should show success! if the employee number is equal to the employer number', () => {
    cy.visit('/');

    cy.get('.tab').contains('Employer').click();
    cy.get('input').filter(':visible').type('100');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.tab').contains('Employee').click();
    cy.get('input').filter(':visible').type('100');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.result').should('contain', 'Success!');
  });

  it('should show failure! if the employee number is > the employer number', () => {
    cy.visit('/');

    cy.get('.tab').contains('Employer').click();
    cy.get('input').filter(':visible').type('90');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.tab').contains('Employee').click();
    cy.get('input').filter(':visible').type('100');
    cy.get('button').filter(':visible').contains('Submit').click();

    cy.get('.result').should('contain', 'Failure!');
  });
});
