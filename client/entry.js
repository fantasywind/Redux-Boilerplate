import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';

ReactDOM.render(
  <Root store={store} history={syncHistoryWithStore(browserHistory, store)} />,
  document.getElementById('root')
);
