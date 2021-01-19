import React, { Component } from "react";
import Home from "../src/pages/home/home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
