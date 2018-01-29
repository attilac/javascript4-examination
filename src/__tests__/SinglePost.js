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

  it('should console errors when sent no props', ()=> {
    let error;
    const warn = jest.spyOn(global.console, 'error').mockImplementation((e) => {
      error = e;
      return true;
    });;
    mount(<SinglePost />)
    expect(warn).toHaveBeenCalled();
    expect(error).toContain('Warning');
    warn.mockReset();
    warn.mockRestore();
  })

});
