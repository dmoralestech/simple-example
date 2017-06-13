import {takeLatest} from 'redux-saga/effects';
import {call_fetchModelsByMake,call_fetchModelById} from '../workers/modelWorker';
import ACTIONS from '../../actionCreators/actionTypes/index';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

/**
 * Watch for Dispatch ACTIONS.MODEL.INITIATE.BYMAKEID so the saga can be kicked off.
 * The user has asked for all the models by a specific make id.
 *
 * takeLatest ask almost like a de-bounce.
 */
export function* fetchModelsByMakeIdSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.MODEL.INITIATE.BYMAKEID, call_fetchModelsByMake);
}

/**
 * Watch for Dispatch ACTIONS.MODEL.INITIATE.BYID so the saga can be kicked off.
 * The user has asked for a model by an id.
 */
export function* fetchModelsByIdSaga() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.MODEL.INITIATE.BYID, call_fetchModelById);
}
