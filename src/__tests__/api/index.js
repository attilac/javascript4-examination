import * as api from '../../api';

describe('api tests', ()=> {

  jest.useFakeTimers();

  const responses = [
    'Hello there fellow human',
    'Nice game last night',
    'This weather huh!',
    'Back on the daily grid! Work, work work!',
    'Have you tried a new diet recently?',
    'Did you know that Agneta divorced Göran last year?',
    'Add me on snapchat! @totallyhuman',
    'You can tell that I am a human because I respond slowly. A bot would respond instantly',
    'I would like one cold beers to consume please',
    'Kneel to your robot overlords',
    'Have you ever eaten a hamburger?',
    'Spain is nice in the autumn'
  ];  

  it('should return message', () => {
    const pendingPromise = api.botReply()
        .then(resolved => {    
          const { message } = resolved;
          expect(responses).toContainEqual(message);
        });

    jest.runAllTimers();

    api.botReply()
        .then(resolved => {
          const { message:newMessage } = resolved;
          expect(responses).toContainEqual(newMessage);
        });

    jest.runAllTimers();

    return pendingPromise;   

  }); 

  it('should store persona to localStorage', () => {
    const persona = 'Zac';
    api.storeCurrentPersona({'persona':persona});
    expect(api.fetchCurrentPersona().persona).toBe(persona);
  }); 

  it('should return empty array of personas from localStorage', () => {
    // console.log(api.fetchPersonas());
    expect(api.fetchPersonas()).toHaveLength(0);
  });   

  it('shoul return personas from localStorage', () => {
    const personasInLocalStorage = localStorage.getItem('personas');
    const personas = [
       {'name': 'Zak'},
       {'name': 'Esmeralda'}
      ];
    if(!personasInLocalStorage){
      localStorage.setItem('personas', JSON.stringify(personas));
    }
    expect(api.fetchPersonas()).toHaveLength(2);
  });

});