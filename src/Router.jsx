import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Rank from './pages/Rank';
import Guild from './pages/Guild';

const CustomRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/" layout={MainLayout} component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/Rank/:raid" component={Rank} />
        <Route path="/guilds/:region/:realm/:guild" component={Guild} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
