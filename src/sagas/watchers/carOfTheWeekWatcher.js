import {takeLatest} from 'redux-saga/effects';
import call_fetchCarOfTheWeek from '../workers/carOfTheWeekWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

/**
 * Watch for Dispatch ACTIONS.COTW.INITIATE so the saga can be kicked off.
 * The user has requested the car of the week.
 *
 * takeLatest ask almost like a de-bounce.
 */
export function* fetchCarOfTheWeekSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.COTW.INITIATE, call_fetchCarOfTheWeek);
}
