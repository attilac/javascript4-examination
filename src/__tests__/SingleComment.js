import React from 'react';
import { shallow, mount, render } from 'enzyme';
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

  it.skip('should console errors when no props', ()=> {
    const warn = jest.spyOn(global.console, 'error');
    shallow(<SingleComment />)
    expect(warn).toHaveBeenCalled();
    warn.mockReset();
    warn.mockRestore();
  });

});  

