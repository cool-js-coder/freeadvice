// src/routes.js
import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Register from './components/Register';

const Routes = (props) => (
  <div>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
    <Route path="/register" component={Register} />
  </div>
);

export default Routes;
