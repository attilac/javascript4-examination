describe('App.js', () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit('http://localhost:3000');
  });

  context('Navigate between views', ()=> {
    beforeEach(() => {
      cy.get('[data-test="button"]').as('button')
    });

    it('should display posts', ()=>{
      cy.get('#title')
      .should('be.visible')
    })

    it('should display bot page', ()=> {
      cy.get('@button')
      .click();
      cy.get('[name="userMessage"]')
      .should('be.visible');
    })

    it('should go back to posts', ()=> {
      cy.get('@button')
      .click()
      .click();
      cy.get('#title')
      .should('be.visible')
    })
  })

  // a
  context('Change persona', ()=> {

  });

  // J
  context('Create post', ()=> {
    it('should render after you post it', ()=> {
      cy.get('#title')
      .type('Test title');
      cy.get('#content')
      .type('Test content');
      cy.get('[value="Create"]')
      .click();
      cy.get('article:first-of-type')
        .within(() => 
        cy.get('h2')
        .should('contain', 'Test title')
      );
    });
  });

  // a
  context('Create comment', ()=> {
    

  });

  // j
  context('Remove post', ()=> {
    it('should not be visible after you remove it', ()=> {
      cy.get('#title')
      .type('Title to be removed');
      cy.get('#content')
      .type('Content to be removed');
      cy.get('[value="Create"]')
      .click();
      cy.get('article:first-of-type')
        .within(() => cy.get('[data-test="button"]').click());
      cy.get('article:first-of-type').within(() => cy.get('h2').should('not.contain', 'Test title'));
    });
  });

  // a
  context('Remove comment', ()=> {

  });

  // j
  context('Send a message to bot and get a reply', ()=> {
    const myMessage = 'Hi bot!';

    beforeEach(()=>{
      cy.get('[data-test="button"]').click();
    });

    it('should display your message to the bot', ()=> {
      cy.get('[name="userMessage"]')
      .type(myMessage);
      cy.get('[type="submit"]')
      .click();
      cy.get('.h-64 > .bg-indigo-dark')
      .should('contain', myMessage);
      cy.get('.TypingIndicator')
      .should('be.visible')
    });

    it('display a bot answer', ()=> {
      cy.get('[name="userMessage"]')
      .type(myMessage);
      cy.get('[type="submit"]')
      .click()
      cy.get('.h-64 > .bg-white', {timeout: 10000})
      .should('be.visible')
    });
  });
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