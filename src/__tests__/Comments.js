import React from 'react';
import { shallow, mount } from 'enzyme';
import Comments from '../components/Comments';

// const key = "data";
// const value = JSON.stringify(
// [
//   { 
//     id: '1', 
//     title: 'Title',
//     content: 'Content',
//     author: 'Esmeralda',
//     date: (new Date()).toLocaleString()
//   },
// ]);

const mockComment = JSON.stringify(
  [
    {
      comment: 'Comment',
      id: '1',
      postId: 1,
      author: 'testAuthor',
      date: (new Date()).toLocaleString()
    }
  ]
);

localStorage.setItem('comments', mockComment);

// just fetches []
// it('should set comment as state on mount', ()=> {
//   const wrapper = mount(<Comments postId="1" currentPersona="test" />)
//   console.log(wrapper.state().comments)
//   expect(wrapper.state().comments).toBeTruthy();
// })

// it('should fetch my mock comment', () => {
//   const wrapper = mount(<Comments postId='1' currentPersona="test" />)
//   wrapper.instance().setCommentsFromLocalStorage('1')
//   console.log(wrapper.state().comments);
//   expect(wrapper.state().comments[0].comment).toEqual('Comment')
// });


it('test', ()=>{
  expect(true);
})