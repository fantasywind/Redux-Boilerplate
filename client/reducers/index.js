import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Language from './Language';
import Github from './Github';

export default combineReducers({
  Language,
  Github,
  routing: routerReducer,
});
