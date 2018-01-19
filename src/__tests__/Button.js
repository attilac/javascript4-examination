import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';


describe('button unit tests', ()=> {
  const children = <p />;
  const onClick = jest.fn();
  const defaultWrapper = shallow(<Button onClick={onClick}>{children}</Button>);
  const dangerWrapper = shallow(<Button danger onClick={onClick}>{children}</Button>);

  it('should call onClick', ()=> {
    defaultWrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should render default button', ()=> {
    expect(defaultWrapper.find('button').hasClass('bg-indigo-dark')).toBeTruthy();
  })

  it('should match default btn snapshot', ()=> {
    expect(defaultWrapper).toMatchSnapshot();
  })

  it('should render danger button', ()=> {
    expect(dangerWrapper.find('button').hasClass('bg-red-dark')).toBeTruthy();
  });

  it('should match danger btn snapshot', ()=> {
    expect(dangerWrapper).toMatchSnapshot();
  })
})