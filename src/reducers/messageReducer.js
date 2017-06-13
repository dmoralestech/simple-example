
import ACTIONS from '../actionCreators/actionTypes/index';
import { fromJS } from 'immutable';

const initialState = fromJS({ message: null, isError: false, inFlight: false });

/**
 * Message Reducer holds all the messages from any the Fetch API calls, Fetch in progress, errors etc.
 *
 * Seriously regretting use immutable, only because it makes things far more complicated then it needs to be.
 * I just used it here to show that I am familiar with the api.
 *
 * @param state
 * @param action
 * @returns {any}
 */
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
