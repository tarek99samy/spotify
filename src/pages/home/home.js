import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
// ************************************************
import logo from "../../assets/logo.png";
import personalPhoto from "../../assets/profile-photo.png";
import "./home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let links = [
			{ text: "Premium", to: "premium" },
			{ text: "Support", href: "https://support.spotify.com/eg-en/" },
			{ text: "Download", to: "download" },
		];
		return (
			<>
				<Navbar
					bgColor='default'
					logo={logo}
					links={links}
					linkHover='default'
					personalPhoto={personalPhoto}
					dropdownContent={[]}
				/>
			</>
		);
	}
}
