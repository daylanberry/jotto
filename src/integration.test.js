import { guessWord } from './actions';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { middlewares } from './configureStore';
import { storeFactory } from '../test/testUtils';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = {secretWord}

    beforeEach(() => {
      // const mockStore = configureStore(middlewares)
      store = storeFactory(initialState)
    })

    test('updates state correctly for unsuccessful guess', () => {

      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)

    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))

      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1}]
    const initialState = { guessedWords, secretWord }

    let store;

    beforeEach(() => {
      store = storeFactory(initialState)
    })

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()

      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
      }

      expect(newState).toEqual(expectedState)
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords, {guessedWord: 'party', letterMatchCount: 5}]
      }

      expect(newState).toEqual(expectedState)
    });
  })

});

