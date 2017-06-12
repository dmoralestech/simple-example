import {takeLatest} from 'redux-saga/effects';
import {call_fetchModelsByMake,call_fetchModelById} from '../workers/modelWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

export function* fetchModelsByMakeIdSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.MODEL.INITIATE.BYMAKEID, call_fetchModelsByMake);
}

export function* fetchModelsByIdSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.MODEL.INITIATE.BYID, call_fetchModelById);
}
