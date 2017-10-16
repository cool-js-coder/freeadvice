import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Routes from './routes';
import './index.css';
/*import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
registerServiceWorker();
