import React from 'react';
import { shallow } from 'enzyme';
import TypingIndicator from '../../components/Bot/TypingIndicator';

it('should return null by default', ()=>{
  const wrapper = shallow(<TypingIndicator />)
  expect(wrapper.html()).toBeFalsy();
})

it('should return null when called with false', ()=> {
  const wrapper = shallow(<TypingIndicator typing={false} />)
  expect(wrapper.html()).toBeFalsy();
})

it('should match snapshot when called with true', ()=> {
  const wrapper = shallow(<TypingIndicator typing />)
  expect(wrapper.html()).toMatchSnapshot();
})