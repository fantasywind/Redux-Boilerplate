import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers/';
import thunk from 'redux-thunk';
import apiMiddleware from '../middlewares/apiMiddleware';


const middlewares = [thunk, routerMiddleware(browserHistory), apiMiddleware];
const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
