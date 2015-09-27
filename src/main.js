import 'babel/polyfill';
import 'normalize.css';
import './globals.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import history from './history';
import routes from './routes';

// Expose globally
window.React = React;

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('root'));
