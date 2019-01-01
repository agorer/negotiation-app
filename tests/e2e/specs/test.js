function enterEmployerOfferOf(amount) {
  cy.get('.tab').contains('Employer').click();
  cy.get('input').filter(':visible').type(amount);
  cy.get('button').filter(':visible').contains('Submit').click();
}

function enterEmployeeSalaryOf(amount) {
  cy.get('.tab').contains('Employee').click();
  cy.get('input').filter(':visible').type(amount);
  cy.get('button').filter(':visible').contains('Submit').click();
}

function assertThatResultIs(message) {
  cy.get('.result').should('contain', message);
}

describe('Negotiation app', () => {
  it('should show success! if the employee number is less than the employer number', () => {
    cy.visit('/');

    enterEmployerOfferOf('100');
    enterEmployeeSalaryOf('90');

    assertThatResultIs('Success!');
  });

  it('should show success! if the employee number is equal to the employer number', () => {
    cy.visit('/');

    enterEmployerOfferOf('100');
    enterEmployeeSalaryOf('100');

    assertThatResultIs('Success!');
  });

  it('should show failure! if the employee number is > the employer number', () => {
    cy.visit('/');

    enterEmployerOfferOf('90');
    enterEmployeeSalaryOf('100');

    assertThatResultIs('Failure!');
  });
});
