import {call, put} from 'redux-saga/effects';
import {loadData} from '../../actionCreators/modelActions';
import {saveMessage,setError,setInFlight} from '../../actionCreators/messageActions';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export function* call_fetchModelsByMake(action) {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const models = yield call(api.fetchModelsByMake, action.value);
    yield put(loadData(models));
    yield put(saveMessage(null));
  } catch (e) {
    yield put(setError(true));
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

export function* call_fetchModelById(action) {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const models = yield call(api.fetchModel, action.value);
    yield put(loadData(models));
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