import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import InfoText from './InfoText';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoText />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('HeaderComponent', () => {
    
    const props = {
        data: [],
        loaded: false,
        placeholder: "Loading"
    };

    const component = shallow(<InfoText {...props} />)

    it('renders properly', () => {
        expect(component).toMatchSnapshot()
      })

    it('to be no token', () => {
        expect(component.prop('Token')).toEqual(undefined)
     })

    it('username', () => {
    expect(component.find('.username_prof')).toHaveLength(0)
    })

    it('email', () => {
        expect(component.find('.email_prof')).toHaveLength(0)
     })
    
});