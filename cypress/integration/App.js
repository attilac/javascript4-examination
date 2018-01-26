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
    it('should show default persona', ()=> {
      cy.get('select')
        .should('have.value', 'Zac');
    });  

    it('should change persona to Esmeralda', ()=> {
      cy.get('select')
      .select('Esmeralda').wait(200)
        .should('have.value', 'Esmeralda');   
    });  

    it('should change persona to Morgana', ()=> {
      cy.get('select')
      .select('Morgana').wait(200)
        .should('have.value', 'Morgana');   
    });          
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
    it('should create comment on page', ()=> {
      cy.get('div.w-full:first-of-type')
        .within(() => {
          cy.get('#comment')
            .type('Its awesome') 
          cy.get('form')
            .submit()
          cy.get('p.text-grey-darker')
            .should('contain', 'Its awesome');   
        });  
     });   
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
    it('should remove comment on page', ()=> {
      cy.get('div.w-full:first-of-type')
        .within(() => {
          cy.get('#comment')
            .type('Its awesome') 
          cy.get('form')
            .submit()
          cy.get('p.text-grey-darker')
            .should('contain', 'Its awesome');   
          cy.get('button.bg-red-dark')
            .click()
          cy.get('p.text-grey-darker')
            .should('not.contain', 'Its awesome');               
        });  
     });   
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

