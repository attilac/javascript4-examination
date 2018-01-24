import React from 'react';
import { mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';

jest.useFakeTimers();

it('should set message as state onsubmit', ()=>{
  const wrapper = mount(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.state().messages[0]).toEqual({message: 'Message', bot: false});
  expect(wrapper.state().messages).toHaveLength(1);
});

it('should set typing from false to true', ()=> {
  const wrapper = mount(<Bot />);
  expect(wrapper.state().typing).toBeFalsy();
  wrapper.instance().sendReply();
  expect(wrapper.state().typing).toBeTruthy();
})

it('should get a botreply', ()=> {
  expect.assertions(1);
  const wrapper = mount(<Bot />);
  wrapper.setState({message: 'Message', bot: false})
  return wrapper.instance().sendReply().then(()=> {
    jest.runAllTimers();
    console.log(wrapper.state());
  })

})