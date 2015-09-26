import 'babel/polyfill';
import 'normalize.css';
import './globals.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import history from './history';
import routes from './routes';
import attachFastClick from 'fastclick';

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

// Expose globally
window.React = React;

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('root'));
