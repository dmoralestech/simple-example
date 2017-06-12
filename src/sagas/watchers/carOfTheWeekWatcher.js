import {takeLatest} from 'redux-saga/effects';
import call_fetchCarOfTheWeek from '../workers/carOfTheWeekWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export function* fetchCarOfTheWeekSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.COTW.INITIATE, call_fetchCarOfTheWeek);
}
