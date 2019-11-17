import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout';
import Home from './components/home/Home.page';
import Raid from './components/raid/Raid.page';
import Guild from './components/guild/Guild.page';
import Character from './components/Character/Character.page';

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
        <CustomRoute path="/rank/:raid" layout={MainLayout} component={Raid} />
        <CustomRoute path="/guilds/:region/:realm/:guild" layout={MainLayout} component={Guild} />
        <CustomRoute
          path="/characters/:region/:realm/:name"
          layout={MainLayout}
          component={Character}
        />{' '}
        */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
