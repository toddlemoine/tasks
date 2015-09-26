import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import CurrentContainer from './components/CurrentContainer';
import TaskViewerContainer from './components/TaskViewerContainer';

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={CurrentContainer} />
    <Route path="/view/:id" component={TaskViewerContainer} />
  </Route>
);

export default routes;
