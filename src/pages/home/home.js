import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Navbar />
				<div className='banner'>
					<div>
						<h2 className='banner-text'>Go Premium. Be happy.</h2>
					</div>
				</div>
			</>
		);
	}
}
