import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('singlepost unit tests', ()=>{
  const onclick = jest.fn();
  const wrapper = mount(<SinglePost title="testTitle" content="testContent" author="testAuthor" id="1" date="2018-1-23 14:44:38" currentPersona="testAuthor" onClick={onclick} />)
  const noBtnWrapper = mount(<SinglePost title="testTitle" content="testContent" author="testAuthor" id="1" date="2018-1-23 14:44:38" currentPersona="anotherPersona" onClick={onclick} />)
  
  it('should render button when author and currentPersona match', ()=>{
    expect(wrapper.find('article').html()).toContain('<button')
  });

  it('should call onclick with id', ()=>{
    wrapper.find('button').simulate('click');
    expect(onclick).toHaveBeenCalledWith('1');
  });

  it('should not render button when author and currentPersona mismatch', ()=> {
    expect(noBtnWrapper.find('article').html()).not.toContain('<button');
  });

  it('should render title & content on page', ()=> {
    expect(wrapper.find('article h2').text()).toEqual('testTitle');
    expect(wrapper.find('ReactMarkdown').text()).toEqual('testContent');
  })

  it('should match snapshots', ()=> {
    expect(wrapper).toMatchSnapshot();
    expect(noBtnWrapper).toMatchSnapshot();
  })

  it.skip('should console errors when no props', ()=> {
    const warn = jest.spyOn(global.console, 'error');
    mount(<SinglePost />)
    expect(warn).toHaveBeenCalled();
    warn.mockReset();
    warn.mockRestore();
  })

});
