
import ACTIONS from '../actionCreators/actionTypes/index';

let initialState = { cotw: { review: '', modelId: -1 } };

/**
 * Car of the week Reducer.
 *
 * A Very Very simple Reducer designed to hold the Car of the Week, with some model data.
 *
 * @function
 * @param state
 * @param action
 * @returns {*}
 */
export default function carOfTheWeek(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.COTW.LOAD:
      return Object.assign({}, state, {cotw: value});

    default:
      return state
  }
}
