/// <reference types="cypress" />

const footerLinks = [
  { linkText: 'Merchant Login', url: 'https://hub.blytzpay.com/#/login?next=%2F', verificationText: 'Merchant Login' },
  { linkText: 'Overview', url: 'https://www.blytzpay.com/product', verificationText: 'Effective collections, meaningful connections' },
  { linkText: 'Book a Demo', url: 'https://www.blytzpay.com/demo', verificationText: 'Connections, not Collections' },
  { linkText: 'Blog', url: 'https://www.blytzpay.com/blog', verificationText: 'From the Blog' },
  { linkText: 'Newsletter', url: 'https://www.blytzpay.com/newsletter', verificationText: 'The Blytz Buzz' },
  { linkText: 'Consumer Help', url: 'https://help.blytzpay.com/knowledge', verificationText: 'Help & Support Center' },
  { linkText: 'Merchant Support', url: 'https://help.blytzpay.com/knowledge', verificationText: 'Help & Support Center' },
  { linkText: 'Contact Us', url: 'https://www.blytzpay.com/contact', verificationText: 'Contact Us' },
  { linkText: 'Careers', url: 'https://ats.rippling.com/blytzpay-careers/jobs', verificationText: 'Careers at BlytzPay', isCrossOrigin: true }
];

describe('BlytzPay Footer Links Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  footerLinks.forEach((link) => {
    it(`should navigate to the ${link.linkText} page`, () => {
      cy.get(".kl-footer__menu").contains('a', link.linkText).click();

      // Handle cross-origin URL verification
      if (link.isCrossOrigin) {
        cy.origin(new URL(link.url).origin, { args: { url: link.url, verificationText: link.verificationText } }, ({ url, verificationText }) => {
          cy.url().should('include', new URL(url).pathname);
          cy.contains(verificationText).should('be.visible');
        });
      } else {
        cy.url().should('eq', link.url);
        cy.contains(link.verificationText).should('be.visible');
      }
    });
  });
});
