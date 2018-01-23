import React from 'react';
import { mount } from 'enzyme';
import Message from '../components/Bot/Message';

describe('Message unit tests', ()=> {

  it('should render message', () => {
    const wrapper = mount(<Message bot={false} message="testmessage" />);
    expect(wrapper.find('p').text()).toBe('testmessage'); 
  });  

  it('should render message from bot with correct class', () => {
    const wrapper = mount(<Message bot={true} message="testmessage" />);
    expect(wrapper.find('p.bg-white')).toHaveLength(1); 
  });    

  it('should render message with default class', () => {
    const wrapper = mount(<Message bot={false} message="testmessage" />);
    expect(wrapper.find('p.bg-white')).toHaveLength(0); 
  });   

});  