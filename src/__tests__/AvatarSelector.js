import React from 'react';
import { mount } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

describe('avatar selector unit tests', ()=> {

  it('should render component with zac image', () => {
    const currentPersona = 'Zac';
    const wrapper = mount(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').prop('src')).toBe('zac.png');
  });

  it('should render component with esmeralda image', () => {
    const currentPersona = 'Esmeralda';
    const wrapper = mount(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').prop('src')).toBe('esmeralda.png');
  });  

  it('should render component with morgana image', () => {
    const currentPersona = 'Morgana';
    const wrapper = mount(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').prop('src')).toBe('morgana.png');
  }); 

  it('should render component with default image', () => {
    const currentPersona = 'NonExistingPersona';
    const wrapper = mount(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').prop('src')).toBe('zac.png');
  });    

});  




