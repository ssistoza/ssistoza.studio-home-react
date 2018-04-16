import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Landing from "./components/Landing";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
