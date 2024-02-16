const targetUrl = '/';

describe('Check homepage', () => {
    before(() => {
        cy.visit('/');
    });

    it('should visit and load the homepage', () => {
        cy.url().should('include', targetUrl);
    });
});
