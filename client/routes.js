import React from 'react';
import { Route, IndexRoute } from 'react-router';



import App from './components/App';
import LandingPage from './components/LandingPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
  </Route>
);
