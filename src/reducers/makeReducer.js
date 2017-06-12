
import ACTIONS from '../actionCreators/actionTypes/index';

let initialState = {makes: [] };

/**
 * When you use immutable, it locks down the state, by wrapping the object
 * with mutable functions that track the state change, returning the new
 * state of the object.
 *    Consequently Object.assign will destroy the immutable object.
 *    Therefore, .......
 *
 * Lessons Learned:
 *   1.) No need for immutable.js. Good programming and testing can replace this functionality.
 *   2.) Normalizr looks really good, it is a water shed of good ideas. However, wrapping and unwrapping the data or even re-working the services and apis requires work.
 *   3.) Keep Payload manipulation here... close to the code.
 */

export default function makeReducer(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.MAKE.LOAD:
      return Object.assign({}, state, {makes: value});

    default:
      return state
  }
}
