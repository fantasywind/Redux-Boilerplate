import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


// Boards
import App from './components/App.js';
import LandingPage from './components/LandingPage.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
