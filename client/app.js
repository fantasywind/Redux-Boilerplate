import React, { Component, PropTypes as T } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Boards
import AppPage from './components/App.js';
import LandingPage from './components/LandingPage.js';

class App extends Component {
  render() {
    const {
      store
    } = this.props;
    return (
      <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
          <Route path="/" component={AppPage}>
            <IndexRoute component={LandingPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: T.object.isRequired,
};

export default App;
