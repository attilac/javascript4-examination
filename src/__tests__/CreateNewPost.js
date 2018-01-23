import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('input onchange tests', ()=> {
  const wrapper = mount(<CreateNewPost author="testAuthor" updatePosts={jest.fn()} />);

  it('should change state onchange title', () => {
    expect(wrapper.state().title).toEqual('');
    const input = wrapper.find("#title");
    input.simulate('change', { target: { name: 'title', value: 'testTitle' } });
    expect(wrapper.state().title).toEqual('testTitle');
  });

  it('should change state onchange content', () => {
    expect(wrapper.state().content).toEqual('');
    const input = wrapper.find("#content");
    input.simulate('change', { target: { name: 'content', value: 'testContent' } });
    expect(wrapper.state().content).toEqual('testContent');
  });
});

describe('input onSubmit tests', ()=>{
  const updatePostsFn = jest.fn();
  const wrapper = mount(<CreateNewPost author="testAuthor" updatePosts={updatePostsFn} />);
  wrapper.setState({title: 'testTitle', content: 'testContent'});
  wrapper.find("form").simulate('submit');

  it('should store post in localStorage', ()=> {
    const localSt = JSON.parse(localStorage.getItem('posts'));
    expect(localSt[0].title).toEqual('testTitle');
    expect(localSt[0].content).toEqual('testContent');
  });

  it('should call updatePostsFn', ()=> {
    expect(updatePostsFn).toHaveBeenCalled();
  });

  it('should clear state', () => {
    expect(wrapper.state().title).toBeFalsy();
    expect(wrapper.state().content).toBeFalsy();
  });

});