import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import config from './config';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import apiMiddleware from './middlewares/apiMiddleware.js';
import reducers from './reducers';

const logger = createLogger({
  collapsed: (getState, action) => (action.type.includes('@@router/')),
});

const middlewares = [thunk, routerMiddleware(browserHistory), apiMiddleware];

if (config.useReduxLog) {
  middlewares.push(logger);
}

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

const history = syncHistoryWithStore(browserHistory, store);

// Boards
import App from './components/App.js';
import LandingPage from './components/LandingPage.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
