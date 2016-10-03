import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18n from '../libs/i18n/';

export default class Root extends Component {

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <div>
            <Router history={history} routes={routes} />
          </div>
        </I18nextProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
