import config from '../config';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import apiMiddleware from '../middlewares/apiMiddleware';


const middlewares = [thunk, routerMiddleware(browserHistory), apiMiddleware];
const logger = createLogger({
  collapsed: (getState, action) => (action.type.includes('@@router/')),
});

if (config.useReduxLog) middlewares.push(logger);

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
