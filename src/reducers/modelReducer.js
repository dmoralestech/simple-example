
import ACTIONS from '../actionCreators/actionTypes/index';

let initialState = {models: [] };

/**
 * The Model Reducer.
 *
 * I noticed that the Make Id is in the data, this makes it a good canidate for the Normalizer framework. I just didnt have time to build it.
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function modelReducer(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.MODEL.LOAD:
      return Object.assign({}, state, {models: value});

    default:
      return state
  }
}
