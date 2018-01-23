import React from 'react';
import { mount } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

describe('avatar selector unit tests', ()=> {

  it('should render component with zac image', () => {
    const wrapper = mount(<AvatarSelector currentPersona="Zac" />);
    expect(wrapper.find('img').prop('src')).toBe('zac.png');
  });

  it('should render component with esmeralda image', () => {
    const wrapper = mount(<AvatarSelector currentPersona="Esmeralda" />);
    expect(wrapper.find('img').prop('src')).toBe('esmeralda.png');
  });  

  it('should render component with morgana image', () => {
    const wrapper = mount(<AvatarSelector currentPersona="Morgana" />);
    expect(wrapper.find('img').prop('src')).toBe('morgana.png');
  });  

});  




