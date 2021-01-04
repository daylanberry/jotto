import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default intial state of false when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false)

});

test('returns state of true upon receiving an action type CORRECT_GUESS', () => {

  const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})

  expect(newState).toBe(true)
});