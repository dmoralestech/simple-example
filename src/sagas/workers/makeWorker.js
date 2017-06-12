import {call, put} from 'redux-saga/effects';
import {loadData} from '../../actionCreators/makeActions';
import {saveMessage,setError,setInFlight} from '../../actionCreators/messageActions';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* call_fetchMakes(action) {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const makes = yield call(api.fetchMakes, action.value);
    yield put(loadData(makes));
    yield put(saveMessage(null));
  } catch (e) {
    if (e.status === 500) {
      yield put(setError(true));
      yield put(saveMessage('System failure'));
    } else {
      yield put(saveMessage('System is off-line'));
    }
  } finally {
    yield put(setInFlight(false));
  }
}
