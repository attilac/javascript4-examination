import * as api from '../../api';

describe('api unit tests', ()=> {

  afterEach(() => {
    localStorage.clear();
  });

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

  // EXEMPEL 2. Unit-test. Testar generateId isolerat.
  it('should return a 10 char string', ()=> {
    expect(typeof api.generateID()).toEqual('string');
    expect(api.generateID()).toHaveLength(10);
  });

  // createPostObject
  it('should return a correctly formatted post object', ()=>{
    expect(typeof api.createPostObject()).toEqual('object');
    expect(Object.keys(api.createPostObject())).toEqual([ 'title', 'content', 'id', 'author', 'date' ]);
    const testObj = api.createPostObject('testTitle');
    expect(testObj.title).toEqual('testTitle');
  });

  it('should return an empty array when no localstorage posts', ()=> {
    expect(api.fetchAllPosts()).toEqual([]);
  })

  it('should return an empty array when no localstorage comments', ()=> {
    expect(api.fetchAllCommments()).toEqual([]);
  })

  // createCommentObject
  it('should return a correctly formatted comment object', ()=>{
    expect(typeof api.createCommentObject()).toEqual('object');
    expect(Object.keys(api.createCommentObject())).toEqual(['comment', 'id', 'postId', 'author', 'date']);
    const testComment = api.createCommentObject('testComment');
    expect(testComment.comment).toEqual('testComment');
  });

  // EXEMPEL 5 - Unit test av filterComments. Lade till try/catch så att den throwar. 
  it('should throw error when called without array', ()=> {
    expect(() => api.filterComments('no array!')).toThrow();
  })
   
  // botReply
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
});


describe('api integration tests', ()=> {

  afterEach(() => {
    localStorage.clear();
  });

  const mockPost = [{ 
    id: '1', 
    title: 'testTitle',
    content: 'testContent',
    author: 'testAuthor',
    date: '2018-1-23 14:44:38'
  }];

  const mockComment = JSON.stringify(
    [{
      comment: 'testComment',
      id: '1',
      postId: '1',
      author: 'testAuthor',
      date: '2018-1-23 14:44:38'
    }]
  );

  // fetchAllPosts
  it('should return a post from localStorage', ()=> {
    localStorage.setItem('posts', JSON.stringify(mockPost));
    expect(api.fetchAllPosts()).toEqual(mockPost);
  });

  // storePostObject
  it('should localstore a post object', ()=> {
    api.storePostObject(mockPost);
    expect(localStorage.getItem('posts')).toEqual(JSON.stringify(mockPost));
  });

  // removePost
  it('should remove my post from localstorage', ()=>{
    localStorage.setItem('posts', JSON.stringify(mockPost));
    api.removePost('1')
    expect(localStorage.getItem('posts')).toEqual('[]');
  });

  // fetchAllCommments
  it('should return a comment from localStorage', ()=> {
      localStorage.setItem('comments', JSON.stringify(mockComment));
      expect(api.fetchAllCommments()).toEqual(mockComment);
  });

  // storeCommentObject
  it('should localstore a comment object', ()=> {
    api.storeCommentObject(mockComment);
    expect(localStorage.getItem('comments')).toEqual(JSON.stringify(mockComment));
  });

  it('should store persona to localStorage', () => {
    const persona = 'Zac';
    api.storeCurrentPersona({'persona':persona});
    expect(api.fetchCurrentPersona().persona).toBe(persona);
  }); 

  it('should return empty array of personas from localStorage', () => {
    expect(api.fetchPersonas()).toHaveLength(0);
  });   

  it('should return personas from localStorage', () => {
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