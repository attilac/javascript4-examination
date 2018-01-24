import React from 'react';
import { mount } from 'enzyme';
import Posts from '../components/Posts';
import {postMockPost} from '../setupTests';

beforeEach(() => {
  postMockPost();
});

afterEach(() => {
  localStorage.clear();
});

it('Should fetch post as state on mount', ()=> {
  const wrapper = mount(<Posts currentPersona="testAuthor" /> );
  expect(wrapper.state().posts[0].title).toEqual('testTitle');
})

it('should remove post from state', ()=> {
  const wrapper = mount(<Posts currentPersona="testAuthor" /> );
  expect(wrapper.state().posts).toHaveLength(1);
  wrapper.instance().removePost('1');
  expect(wrapper.state().posts).toHaveLength(0);
})

it('should render my post & author', () => {
  const wrapper = mount(<Posts currentPersona="testAuthor" /> );
  expect(wrapper.find('article h2').text()).toEqual('testTitle');
  expect(wrapper.find('article div p').text()).toEqual('testContent');
})

it('should match snapshot', () => {
  const wrapper = mount(<Posts currentPersona="testAuthor" /> );
  expect(wrapper.html()).toMatchSnapshot();
})