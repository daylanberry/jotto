import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { middlewares } from './configureStore'

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';


const setup = (initialState={}) => {
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const wrapper = mount(
    <Provider store={store}>
      <Input />
    </Provider>
  )

  return wrapper
}

const factorySetup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}


describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: false
      }
      wrapper = setup(initialState)
    })

    test('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1)

    });
    test('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);

    });
    test('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1)
    });

  });

});

describe('word has been guessed', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      success: true
    }
    wrapper = setup(initialState)
  })

  test('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('does not render the input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')

    expect(inputBox.length).toBe(0);

  });

  test('does not render the submit button', () => {
    const submit = findByTestAttr(wrapper, 'submit-button');
    expect(submit.length).toBe(0);

  });
})

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = false;
    const wrapper = setup({success})
    const successProps = wrapper.props().store.getState().success

    expect(successProps).toBe(success)
  });
  test('guessWord action creator is a function prop', () => {
    const wrapper = factorySetup();
    const guessWordProps = wrapper.instance().props.guessWord

    expect(guessWordProps).toBeInstanceOf(Function)
  })
})

