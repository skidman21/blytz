/// <reference types="cypress" />

const socialMediaLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/blytzpay' },
    { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61555803839572' },
    { platform: 'Instagram', url: 'https://www.instagram.com/blytzpay/' },
    { platform: 'Twitter', url: 'https://twitter.com/blytzpay?lang=en' }
  ];
  
  describe('BlytzPay Social Media Footer Links Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    socialMediaLinks.forEach((link) => {
      it(`should verify that the ${link.platform} link is visible`, () => {
        // Check if the social media link is present and visible
        cy.get(`a[href="${link.url}"]`).should('be.visible');
      });
    });
  });
  