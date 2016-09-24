import React, { Component, PropTypes as T } from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './libs/i18n/';
// Boards
import AppPage from './components/App.js';
import LandingPage from './components/LandingPage.js';


class App extends Component {
  render() {
    const { store } = this.props;

    const Routes =
    (<Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={AppPage}>
        <IndexRoute component={LandingPage} />
      </Route>
    </Router>);


    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <div>
            {Routes}
          </div>
        </I18nextProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  store: T.object.isRequired,
};

export default App;
