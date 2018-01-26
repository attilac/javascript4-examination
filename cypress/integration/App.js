/* eslint-disable */

describe('App.js', () => {

  context('Check App', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  });

  context('screenshots', () => {
    beforeEach(() => {
    });

    it('should take screenshots', () => {
      cy.viewport('macbook-13')
      cy.wait(300);
      cy.screenshot('macbook-13');
    });
  });

});