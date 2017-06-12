import {fromJS} from 'immutable';
import ACTIONS from '../actionCreators/actionTypes/index';

const SELECT_A_MODEL = 'Select a Model';
const SELECT_A_MAKE = 'Select a Make';

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

