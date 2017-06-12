import {call, put} from 'redux-saga/effects';
import {loadData} from '../../actionCreators/carOfTheWeekActions';
import {saveMessage,setError,setInFlight} from '../../actionCreators/messageActions';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* call_fetchCarOfTheWeek() {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const cotw = yield call(api.fetchCarOfTheWeek);
    const model = yield call(api.fetchModel, cotw.modelId);
    let carOfTheWeek = Object.assign({}, cotw, model[0]);
    yield put(loadData(carOfTheWeek));
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
