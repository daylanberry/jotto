import { actionTypes } from '../actions'

/**
 * @method successReducer
 * @param {array} state - array of guessed words
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success statel
 */



export default (state, action) => {

  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true


    default:
      return false
  }
}