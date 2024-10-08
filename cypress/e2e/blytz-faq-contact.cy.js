/// <reference types="cypress" />

describe('Contact Us Button Test', () => {
    it('should click the Contact Us button', () => {
      cy.visit('/blytzpaty-faq');
      cy.contains('a', 'CONTACT US').should('be.visible').click();
      cy.url().should('include', '/contact');
    });
  });
  
  