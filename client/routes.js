import React from 'react';
import { Route, IndexRoute } from 'react-router';



import AppPage from './components/App';
import LandingPage from './components/LandingPage';

export default (
  <Route path="/" component={AppPage}>
    <IndexRoute component={LandingPage} />
  </Route>
);
