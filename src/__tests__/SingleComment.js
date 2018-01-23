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
    // console.log(wrapper.find('[data-test="button"]'));
    expect(wrapper.find('[data-test="button"]')).toHaveLength(1);
  });    
});  