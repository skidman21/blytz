/// <reference types="cypress" />

const legalLinks = [
    { linkText: 'Privacy Policy', url: 'https://www.blytzpay.com/privacy-policy', verificationText: 'Privacy Policy — Blytz, LLC' },
    { linkText: 'Terms & Conditions', url: 'https://www.blytzpay.com/terms-and-conditions', verificationText: 'Terms and Conditions' }
  ];

  describe('BlytzPay Footer Legal Links Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    legalLinks.forEach((link) => {
      it(`should navigate to the ${link.linkText} page and assert unique identifier`, () => {
        cy.get('.kl-footer__legal').contains('a', link.linkText).click();
        cy.url().should('eq', link.url);
        cy.contains(link.verificationText).should('be.visible')
      });
    });
  });