
import ACTIONS from '../actionCreators/actionTypes/index';
import { fromJS } from 'immutable';

const initialState = fromJS({ message: null, isError: false, inFlight: false });

export default function messageReducer(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.MESSAGE.SAVE:
      return state.merge({
        message: value
      });

    case ACTIONS.MESSAGE.ISERROR:
      return state.merge({
        isError: value
      });

    case ACTIONS.MESSAGE.INFLIGHT:
      return state.merge({
        inFlight: value
      });

    default:
      return state
  }
}
