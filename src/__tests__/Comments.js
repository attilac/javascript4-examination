import React from 'react';
import { mount } from 'enzyme';
import Comments from '../components/Comments';
import {postMockComment} from '../setupTests';


beforeEach(() => {
  postMockComment();
});

afterEach(() => {
  localStorage.clear();
});

it('should fetch comment as state on mount', ()=> {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper.state().comments[0].comment).toEqual('testComment')
})

it('should remove comment from state', ()=> {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper.state().comments).toHaveLength(1);
  wrapper.instance().removeComment("1");
  expect(wrapper.state().comments).toHaveLength(0);
})

it('should render my comment & author', ()=> {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper.find('SingleComment div p .text-grey-darker').text()).toEqual('testComment');
  expect(wrapper.find('SingleComment div p .text-grey-dark').text()).toContain('testAuthor');
})

it('should match snapshot', () => {
  const wrapper = mount(<Comments postId="1" currentPersona="testAuthor" />)
  expect(wrapper).toMatchSnapshot();
})


