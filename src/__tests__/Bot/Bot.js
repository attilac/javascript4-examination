import React from 'react';
import { mount, shallow } from 'enzyme';
import Bot from '../../components/Bot/Bot';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
};


it('should set message as state onsubmit', ()=>{
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.state().messages[0]).toEqual({message: 'Message', bot: false});
  expect(wrapper.state().messages).toHaveLength(1);
});

it('should render my message on screen', ()=> {
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.html()).toContain('Message');
});

it('should set typing from false to true', ()=> {
  const wrapper = shallow(<Bot />);
  expect(wrapper.state().typing).toBeFalsy();
  wrapper.instance().sendReply();
  expect(wrapper.state().typing).toBeTruthy();
});

it.skip('should get a botreply', ()=> {
  const wrapper = mount(<Bot />);
  wrapper.setState({message: 'Message', bot: false})
  wrapper.instance().sendReply();
    return flushPromises().then(() => {
      console.log(wrapper.state());
      expect(true);
  });
});


