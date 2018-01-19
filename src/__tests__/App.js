import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});

it('should render <App /> with no Persona selected', () => {
  const wrapper = shallow(<App />);
  const user = wrapper.state().currentPersona;
  expect(user).toBe("");
});

it('should render <App /> with Persona', () => {
  const wrapper = shallow(<App />);
  const persona = 'Zak';
  wrapper.setState({'currentPersona': persona});
  const user = wrapper.state().currentPersona;
  expect(user).toBe("Zak");
});

it('should render <App /> with default Page', () => {
  const wrapper = shallow(<App />);
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe("home");
});

it('should render <App /> changed Page', () => {
  const wrapper = shallow(<App />);
  const page = "bot";
  const { currentPage:defaultPage } = wrapper.state();
  expect(defaultPage).toBe("home");
  wrapper.setState({'currentPage': page});
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe("bot");
});

it('should render fetch user and display on page', () => {

});
