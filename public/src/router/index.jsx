import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/dashboard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;