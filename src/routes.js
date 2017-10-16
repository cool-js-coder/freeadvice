// src/routes.js
import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <div>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </div>
);

export default Routes;
