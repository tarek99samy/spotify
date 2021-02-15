import React, { Component } from "react";
import Home from "./pages/home/home";
import Download from "./pages/download/download";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./variables.css";
import "./app.css";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/download' component={Download} />
				</Switch>
			</BrowserRouter>
		);
	}
}
