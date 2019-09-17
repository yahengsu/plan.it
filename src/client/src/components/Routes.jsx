import React from "react";
import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ViewTripPage from "./pages/ViewTripPage";
import CreateTripPage from "./pages/CreateTripPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/view" component={ViewTripPage} />
      <Route path="/create" component={CreateTripPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
