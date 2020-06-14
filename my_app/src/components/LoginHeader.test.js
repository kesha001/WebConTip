import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import LoginHeader from './LoginHeader';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('LoginHeader', () => {

  const LoginHeaderContainer = (<LoginHeader/>)

  it('renders properly', () => {
    expect(LoginHeaderContainer).toMatchSnapshot()
  })

  const component = shallow(<LoginHeader/>)

  it('header to be visible', () => {
    expect(component.find('h1').text()).toEqual('ConTip')
  })

  });