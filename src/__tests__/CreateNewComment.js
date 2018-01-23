import React from 'react';
import { mount, shallow } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

describe('CreateNewComment unit tests', ()=> {

  it('form submission should clear state after submitting to loacalStorage', () => {
    const updateComments = jest.fn();
    const wrapper = mount(<CreateNewComment  author="Attila" postId="1" updateComments={updateComments}/>);
    wrapper.setState({comment: 'testcomment'})
    expect(wrapper.state().comment).toBe('testcomment');   
    wrapper.find('form').simulate('submit');
    // console.log(wrapper.state());
    expect(wrapper.state().comment).toBe(''); 
  });

  it('textfield change should update component state', () => {
    const updateComments = jest.fn();
    const wrapper = mount(<CreateNewComment  author="Attila" postId="1" updateComments={updateComments}/>);
    wrapper.find('#comment').simulate('change', {target: { name: 'comment', value:'testcomment'}});
    expect(wrapper.state().comment).toBe('testcomment'); 
  });  

});  