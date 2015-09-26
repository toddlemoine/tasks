import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import CurrentContainer from './components/CurrentContainer';

const routes = (
  <Route component={App}>
    <Route path="/" component={CurrentContainer} />
  </Route>
);

export default routes;
