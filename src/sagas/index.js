
import {fork} from 'redux-saga/effects';
import {fetchMakesSaga} from './watchers/makeWatcher';
import {fetchModelsByMakeIdSaga,fetchModelsByIdSaga} from './watchers/modelWatcher';
import {fetchCarOfTheWeekSaga} from './watchers/carOfTheWeekWatcher';

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga() {
  yield [
    fork(fetchMakesSaga),
    fork(fetchModelsByMakeIdSaga),
    fork(fetchModelsByIdSaga),
    fork(fetchCarOfTheWeekSaga)
  ]
}
