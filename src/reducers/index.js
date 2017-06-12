import {combineReducers} from 'redux';
import makeReducer from './makeReducer';
import modelReducer from './modelReducer';
import carOfTheWeekReducer from './carOfTheWeekReducer';
import messageReducer from './messageReducer';
import selectionsReducer from './selectionsReducer';

export default combineReducers({
  makeReducer,
  modelReducer,
  carOfTheWeekReducer,
  messageReducer,
  selectionsReducer
});
