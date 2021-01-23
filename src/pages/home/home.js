import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Navbar />
				<div className='banner'>
					<div>
						<h1 className='banner-text'>Go Premium. Be happy.</h1>
					</div>
					<div>
						<Link to='/'>
							<button className='btn-green'>Start Free Trial</button>
						</Link>
					</div>
					<div className='banner-terms'>
						<p className='terms-text'>
							*
							<Link to='/' className='terms-link'>
								Terms and conditions
							</Link>
							apply. Open only to users who haven't already tried Premium.
						</p>
					</div>
				</div>
			</>
		);
	}
}
