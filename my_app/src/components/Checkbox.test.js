import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});