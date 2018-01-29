import React from 'react';
import { mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

describe('PersonaSwitcher unit tests', ()=> {

  it('should render component with current Persona', () => {
    const changePersona = jest.fn();
    let currentPersona = 'Zac';
    let wrapper = mount(<PersonaSwitcher currentPersona={currentPersona} changePersona={changePersona} />);
    expect(wrapper.find('select').prop('value')).toBe(currentPersona);
    currentPersona = 'Esmeralda';
    wrapper = mount(<PersonaSwitcher currentPersona={currentPersona} changePersona={changePersona} />);
    expect(wrapper.find('select').prop('value')).toBe(currentPersona);
  });
}); 