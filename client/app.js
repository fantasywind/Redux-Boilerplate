import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
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

export const store = createStore(reducers, {}, applyMiddleware(
  thunk,
  routerMiddleware(browserHistory),
  apiMiddleware,
));

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
