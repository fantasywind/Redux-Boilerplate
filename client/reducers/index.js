import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Language from './Language';

export default combineReducers({
  Language,
  routing: routerReducer,
});
