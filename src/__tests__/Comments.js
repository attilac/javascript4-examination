import React from 'react';
import { mount } from 'enzyme';
import Comments from '../components/Comments';
import postMockComment from '../setupTests';


beforeEach(() => {
  postMockComment();
});

afterEach(() => {
  localStorage.clear();
});

it('should fetch comment as state on mount', ()=> {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper.state().comments[0].comment).toEqual('Comment')
})

it('should remove comment from state', ()=> {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  wrapper.instance().removeComment("1");
  expect(wrapper.state().comments).toEqual([]);
})

it('should match snapshot', () => {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper).toMatchSnapshot();
})


