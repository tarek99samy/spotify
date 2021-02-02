import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import { bannerContent, navbarLinks, navbarDropdownContent } from "../../utilities/consts";
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
	// logout will be a stand alone url and handle the actual logic in app.js

	render() {
		return (
			<>
				<Navbar
					bgColor='default'
					logo={logo}
					links={navbarLinks}
					linkHoverColor='default'
					personalPhoto={personalPhoto}
					dropdownContent={navbarDropdownContent}
				/>
				<section>
					<Banner content={bannerContent} />
				</section>
			</>
		);
	}
}
