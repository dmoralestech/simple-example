import {call, put} from 'redux-saga/effects';
import {loadData} from '../../actionCreators/makeActions';
import {saveMessage,setError,setInFlight} from '../../actionCreators/messageActions';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

/**
 * Fetch All the Makes ( optionally by id ), as a Saga, to orchestrate the complexity of events and flow.
 * @param action
 */
export default function* call_fetchMakes(action) {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const makes = yield call(api.fetchMakes, action.value);
    yield put(loadData(makes));
    yield put(saveMessage(null));
  } catch (e) {
    yield put(setError(true));
    if (e.status === 500) {
      yield put(saveMessage('System failure'));
    } else {
      yield put(saveMessage('System is off-line'));
    }
  } finally {
    yield put(setInFlight(false));
  }
}
