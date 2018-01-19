import React from 'react';
import { render, mount, shallow } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});


