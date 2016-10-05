import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Language from './Language';
import gitAPI from './gitAPI';

export default combineReducers({
  Language,
  gitAPI,
  routing: routerReducer,
});
