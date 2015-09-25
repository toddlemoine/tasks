import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Current from './components/Current';

const routes = (
  <Route component={App}>
    <Route path="/" component={Current} />
  </Route>
);

export default routes;
