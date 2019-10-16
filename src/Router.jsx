import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import Guild from "./pages/Guild"

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/guild" component={Guild} />
      </Switch>
    </BrowserRouter>

  )
}

export default Router