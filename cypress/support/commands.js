Cypress.Commands.add('visitBlytzPay', () => {
    cy.visit('https://www.blytzpay.com/');
  });

Cypress.Commands.add('clickNavbarButton', (buttonText) => {
    cy.get('a.kl-navbar__button').contains(buttonText).click();
  });
  