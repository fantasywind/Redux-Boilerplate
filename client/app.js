import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory as history } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import reducers from './reducers';

import App from './containers/App.js';

// Boards
import LandingPage from './containers/LandingPage.js';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  reduxRouterMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path='*' component={LandingPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
