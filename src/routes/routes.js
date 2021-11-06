import React from "react";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }