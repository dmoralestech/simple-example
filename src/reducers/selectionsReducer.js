import {fromJS} from 'immutable';
import ACTIONS from '../actionCreators/actionTypes/index';

const SELECT_A_MODEL = 'Select a Model';
const SELECT_A_MAKE = 'Select a Make';


/**
 * Locking down the original default object. This is a little overkill. It is here just for demo purposes.
 * @type {any}
 */
const initialState = fromJS({
  make: {
    text: SELECT_A_MAKE,
    value: null
  },
  model: {
    text: SELECT_A_MODEL,
    value: null
  }
});

/**
 * The Selection Reducer.
 *
 * Uses immutable to compartmentalize the values from external modification.
 * Personally I think this is a bit of an overkill. Ive only done it here for the
 * purpose of demonstrating it.
 *
 * @param state
 * @param action
 * @returns {any}
 */
export default function selectionsReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SELECTION.MAKE:
      return state.merge({
        make: {
          text: action.value.text,
          value: action.value.value
        },
        model: {
          text: SELECT_A_MODEL,
          value: null
        }
      });
    case ACTIONS.SELECTION.MODEL:
      return state.merge({
        model: {
          text: action.value.text,
          value: action.value.value
        }
      });
    case ACTIONS.SELECTION.RESET:
      return state.merge({
        make: {
          text: SELECT_A_MAKE,
          value: null
        },
        model: {
          text: SELECT_A_MODEL,
          value: null
        }
      });
    default :
      return state;
  }

}

