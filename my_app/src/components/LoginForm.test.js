import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, configure} from 'enzyme';
import jest from 'jest-mock';
import LoginForm from './LoginForm';
import Adapter from 'enzyme-adapter-react-16';
import history from './history';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Login Component', () => {
  window.alert = jest.fn();
  let wrapper;
  const mockedEvent = { target: {}, preventDefault: () => {} };
  const handleSubmit = jest.fn(() => { 
    let options = {
      method: "POST",
      body: JSON.stringify(wrapper.state()),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:8000/api/v1/auth/login/', options)
    .then(res => {
      if (res.status != 200){
        alert("Wrong credentials!");
        return false;
      }
      alert("Success! Logged in!");
      return res.json();
    })
  });

  beforeEach(() => {
    wrapper = shallow(<LoginForm history={history} />);
  });

  it('"handleSubmit" to have been called with "kesha", "111"', done => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    wrapper.find('#input-auth-username').simulate('change', { target: { value: 'kesha' } });
    expect(wrapper.state().username).toBe('kesha');
    wrapper.find('#input-auth-password').simulate('change', { target: { value: '111' } });
    expect(wrapper.state().password).toBe('111');
    wrapper.find('#input-auth-form').simulate('submit', mockedEvent);

    expect(global.fetch).toHaveBeenCalled();
    process.nextTick(() => {
      global.fetch.mockClear();
      done();
    });
  });
});