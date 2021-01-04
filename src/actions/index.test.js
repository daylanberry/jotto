import {correctGuess, actionTypes} from './';

describe('correct guess', () => {
  test('returns an action with type CORRECT_GUESS', () => {
    const action = correctGuess();

    let expectedAction = {
      type: actionTypes.CORRECT_GUESS
    }

    expect(action).toEqual(expectedAction)
  })
})