import React, { Component } from "react";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./variables.css";
import "./app.css";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		);
	}
}
