import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../../components/Bot/MessageForm';

describe('MessageForm unit tests', ()=> {

  it('should focus input on mount', () => {
    const onSubmit = jest.fn();
    mount(<MessageForm onSubmit={onSubmit} />);
    const focusedElement = document.activeElement; 
    expect(focusedElement.name).toBe('userMessage');
  });  

  it('should update state on input change', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<MessageForm onSubmit={onSubmit} />);
    expect(wrapper.state().userMessage).toBe('');
    wrapper.find('[name="userMessage"]').simulate('change', {target:{name:'userMessage', value:'testmessage'}});
    expect(wrapper.state().userMessage).toBe('testmessage'); 
  }); 

  it('should clear state on submit', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<MessageForm onSubmit={onSubmit} />);
    expect(wrapper.state().userMessage).toBe('');
    wrapper.find('[name="userMessage"]').simulate('change', {target:{name:'userMessage', value:'testmessage'}});
    expect(wrapper.state().userMessage).toBe('testmessage');     
    wrapper.find('form').simulate('submit');
    expect(wrapper.state().userMessage).toBe(''); 
  });      
});  