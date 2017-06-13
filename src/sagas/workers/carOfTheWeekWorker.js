import {call, put} from 'redux-saga/effects';
import {loadData} from '../../actionCreators/carOfTheWeekActions';
import {saveMessage,setError,setInFlight} from '../../actionCreators/messageActions';
import * as api from '../../services/api';

/** **************** **/
/** Actual API calls **/
/** **************** **/

/**
 * Get the car of the week, this really is a RPC not a Rest function.
 */
export default function* call_fetchCarOfTheWeek() {
  try {
    yield put(saveMessage('loading'));
    yield put(setError(false));
    yield put(setInFlight(true));
    const cotw = yield call(api.fetchCarOfTheWeek);
    const models = yield call(api.fetchModel, cotw.modelId);
    let model = models[0]
    const makes = yield call(api.fetchMakes, model.makeId);
    let make = makes[0];
    let carOfTheWeek = Object.assign({}, cotw, model, { manufacture: make.name });

    console.log('carOfTheWeek', carOfTheWeek);

    yield put(loadData(carOfTheWeek));
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
