import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rank from './pages/Rank';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Rank/:raid" component={Rank} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
