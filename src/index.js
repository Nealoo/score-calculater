import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Input from './input';
import Result from './result';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path='/input' component={Input} />
        <Route path='/result' component={Result} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
