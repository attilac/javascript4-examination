import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleComment from '../components/SingleComment';
import * as api from '../api';

describe('SingleComment unit tests', ()=> {

  it('should render comment', () => {
    const onClick = jest.fn();
    const comment = api.createCommentObject('testcomment', 123, 'Attila');
    const wrapper = mount(<SingleComment  {...comment} onClick={onClick} currentPersona="" />);
    expect(wrapper.find('p')).toHaveLength(2);
  });

  it('should render comment with currentPersona', () => {
    const onClick = jest.fn();
    const comment = api.createCommentObject('testcomment', 123, 'Attila');
    const wrapper = mount(<SingleComment  {...comment} onClick={onClick} currentPersona="Attila" />);
    expect(wrapper.find('[data-test="button"]')).toHaveLength(1);
  });    

  it('should trigger click', () => {
    const onClick = jest.fn();
    const comment = api.createCommentObject('testcomment', 123, 'Attila');
    const wrapper = mount(<SingleComment  {...comment} onClick={onClick} currentPersona="Attila" />);
    wrapper.find('[data-test="button"]').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });  


  /**
   *  EXEMPEL 6 - Spionerar på console.error och ändrar också vad console.error gör, dvs skriver inte ut i konsolen.
   * Note: By default, jest.spyOn also calls the spied method. This is different behavior from most other test libraries. 
   * f you want to overwrite the original function, you can use mockImplementation...
   */
  it('should console errors when sent no props', ()=> {
    let error = '';
    const warn = jest.spyOn(global.console, 'error').mockImplementation((e) => {
      error = e;
      return true;
    });
    shallow(<SingleComment />)
    expect(warn).toHaveBeenCalled();
    expect(error).toContain('Warning');
    warn.mockReset();
    warn.mockRestore();
  });

});  

