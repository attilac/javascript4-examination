describe('App.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('Navigate between views', ()=> {
    beforeEach(() => {
      cy.get('[data-test="button"]').as('button')
    });

    it('should display posts', ()=>{
      cy.get('#title')
      .should('have.length', 1)
    })

    it('should display bot page', ()=> {
      cy.get('@button')
      .click();
      cy.get('[name="userMessage"]')
      .should('have.length', 1);
    })

    it('should go back to posts', ()=> {
      cy.get('@button')
      .click()
      .click();
      cy.get('#title')
      .should('have.length', 1)
    })
  })

  // a
  context('Change persona', ()=> {

  });

  // J
  context('Create post', ()=> {

  });

  // a
  context('Create comment', ()=> {

  });

  // j
  context('Remove post', ()=> {

  });

  // a
  context('Remove comment', ()=> {

  });

  // j
  context('Send a message to bot and get a reply', ()=> {

  })
});



/**
 * 

describe('App.js', () => {

  context('Check rates', ()=> {
    beforeEach(()=> {
      cy.visit('http://localhost:3000');
      cy.get('[data-test="list"]').as('list');
    })

    it('should fetch rates from API', ()=> {
      cy.get('@list')
      .children()
      .should('have.length', 31);
    })

    it('first rate should be AUD', ()=> {
      cy.get('@list')
      .children()
      .first()
      .should('contain', 'AUD');
    })

    it.skip('should be able to search', ()=> {
      cy.get('#searchbox')
      .type('AFG{backspace}{backspace}UD', {delay:500});
      cy.get('@list')
      .children()
      .should('have.length', 1)
    })
  })

  context('Button', ()=> {
    beforeEach(()=> {
      cy.visit('http://localhost:3000');
      cy.get('[data-test="list"]').as('list');
      cy.get('[data-test="button"]').as('button');
    })
    it('should be disabled when clicked', ()=> {
      cy.get('@button')
      .click();
      cy.get('@button')
      .should('have.class', 'cursor-not-allowed')
    })
    
  })

  context.skip('screenshots', ()=> {
    beforeEach(()=> {
      cy.visit('http://localhost:3000');
    })
    it('should take screenshots', ()=>{
      cy.viewport('iphone-6')
      cy.wait(300)
      cy.screenshot('iphone-6');
    })
  })
})
 */