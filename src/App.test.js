import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { middlewares } from './configureStore'

import { Provider } from 'react-redux';
import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (initialState={}) => {
  const mockStore = configureStore(middlewares)
  const store = mockStore(initialState)

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )

  return wrapper
}

const factorySetup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties', () => {
  test('has access to success state', () => {
    const success = true;
    const wrapper = setup({success})
    const successProps = wrapper.props().store.getState().success

    expect(successProps).toBe(success)
  });

  test('has access to secretWord state', () => {
    const secretWord = 'party';
    const wrapper = setup({secretWord})
    const secretWordProps = wrapper.props().store.getState().secretWord

    expect(secretWordProps).toBe(secretWord)
  });

  test('has access to guessedWords state', () => {
    const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({guessedWords})
    const guessedWordsProp = wrapper.props().store.getState().guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords)
  });

  test('getSecretWord action creator is a function on the props', () => {
    const wrapper = factorySetup();
    const getSecretWordsProps = wrapper.instance().props.getSecretWord;

    expect(getSecretWordsProps).toBeInstanceOf(Function)
  })
})