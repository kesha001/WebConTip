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
  const mockedEvent = { target: {}, preventDefault: () => {} };

  let wrapper;
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