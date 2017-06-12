import {takeLatest} from 'redux-saga/effects';
import call_fetchMakes from '../workers/makeWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export function* fetchMakesSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.MAKE.INITIATE, call_fetchMakes);
}
