import React from 'react';
import { mount } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

describe('CreateNewComment unit tests', ()=> {

  it('should store comment to localStorage and clear state after', () => {
    const updateComments = jest.fn();
    const wrapper = mount(<CreateNewComment  author="Attila" postId="1" updateComments={updateComments} />);
    wrapper.setState({comment: 'testcomment'})
    expect(wrapper.state().comment).toBe('testcomment');   
    wrapper.find('form').simulate('submit');
    // console.log( JSON.parse(localStorage.getItem('comments'))[0].comment);
    const newComment = JSON.parse(localStorage.getItem('comments'))[0].comment;
    expect(newComment).toBe('testcomment');
    expect(wrapper.state().comment).toBe(''); 
  });

  it('textfield change should update component state', () => {
    const updateComments = jest.fn();
    const wrapper = mount(<CreateNewComment  author="Attila" postId="1" updateComments={updateComments} />);
    wrapper.find('#comment').simulate('change', {target: { name: 'comment', value:'testcomment'}});
    expect(wrapper.state().comment).toBe('testcomment'); 
  });  

});  