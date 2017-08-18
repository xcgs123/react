import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from '../App.js';
import About from '../containers/about.js'

export default (
  <div>
      <Route path="/home" component={App} />
      <Route path="/about" component={About} />
  </div>
);
