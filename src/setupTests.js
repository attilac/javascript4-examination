import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Extended version of localStorage mock, this is 
 * so you can actually save stuff in localStorage
 */
const localStorageMock = (() => {
  let store = {}
  return {
    getItem: jest.fn(key => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {}
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    })
  }
});

global.localStorage = localStorageMock();

/** LOCAL STORAGE MOCK UTILS */

function postMockComment(){
  const mockComment = JSON.stringify(
    [
      {
        comment: 'Comment',
        id: '1',
        postId: '1',
        author: 'testAuthor',
        date: '2018-1-23 14:44:38'
      }
    ]
  );
  
  localStorage.setItem('comments', mockComment);
}

export default postMockComment;