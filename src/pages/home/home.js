import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
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
		let navbarLinks = [
			{ text: "Premium", to: "premium" },
			{ text: "Support", href: "https://support.spotify.com/eg-en/" },
			{ text: "Download", to: "download" },
		];

		let navbarDropdownContent = [
			{ text: "Account", to: "account" },
			{ text: "Log out", to: "logout" },
		];

		return (
			<>
				<Navbar
					bgColor='default'
					logo={logo}
					links={navbarLinks}
					linkHover='default'
					personalPhoto={personalPhoto}
					dropdownContent={navbarDropdownContent}
				/>
				<section className='home-banner'>
					<Banner
						content={[
							{ type: "xl", text: "Go Premium. Be happy.", color: "white" },
							{
								type: "link",
								text: "start free trial",
								href: "premium",
								fg: "white",
								bg: "green",
							},
							{
								type: "xxs",
								text:
									"* Terms and conditions apply. Open only to users who haven't already tried Premium.",
								color: "white",
							},
						]}
					/>
				</section>
			</>
		);
	}
}
