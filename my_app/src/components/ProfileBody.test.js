import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ProfileBody from './ProfileBody';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileBody />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  