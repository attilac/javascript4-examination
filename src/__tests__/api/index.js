import * as api from '../../api';

describe('api tests', ()=> {
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('should return random message', () => {
    console.log('hej');
  });

  jest.useFakeTimers();

  it('works with resolves', () => {
    const pendingPromise = api.botReply()
        .then(resolved => {
            expect(resolved).toBe('something')
        })
    // Activate the timer (pretend the specified time has elapsed).
    jest.runAllTimers()
    // Return the promise, so Jest waits for its completion and fails the
    // test when the promise is rejected.
    return pendingPromise  
  });  

});