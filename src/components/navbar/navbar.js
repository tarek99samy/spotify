import React, { Component } from "react";
import authContext from "../../context/auth";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
// ----------------- importing style sheets in strict order --------------------
// import "../../variables.css";
import "./navbar.css";

export default class Navbar extends Component {
	static contextType = authContext;
	constructor(props) {
		super(props);
		this.state = {
			isDropdownOpen: false,
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	toggleDropdown() {
		this.setState((state) => ({
			isDropdownOpen: !state.isDropdownOpen,
		}));
	}

	render() {
		return (
			<header className={`navbar navbar--${this.props.bgColor}`}>
				<div className='navbar__container'>
					<div className='navbar__logocontainer'>
						<Link to='/'>
							<img src={this.props.logo} className='navbar__logo' alt='Spotify' />
						</Link>
					</div>

					<nav className='navbar__desktopview'>
						<ul className='navbar__linkslist'>
							{this.props.links.map((data, i) => (
								<li className='navbar__item' key={i}>
									{"href" in data ? (
										<a
											href={`${data.href}`}
											className={`navbar__link--${this.props.linkHoverColor}hover text--xtiny`}>
											{data.text}
										</a>
									) : (
										<Link
											to={`/${data.to}`}
											className={`navbar__link--${this.props.linkHoverColor}hover text--xtiny`}>
											{data.text}
										</Link>
									)}
								</li>
							))}
							<li role='separator' className='navbar__verticalseparator'></li>
							<li className='navbar__item'>
								<button className='navbar__button' onClick={this.toggleDropdown}>
									<img src={this.props.personalPhoto} alt='user' className='navbar__personalphoto' />
									<span className='navbar__buttontext text--xtiny'>
										profile
										{this.state.isDropdownOpen ? (
											<span className='navbar__dropdownicon'>&#8593;</span>
										) : (
											<span className='navbar__dropdownicon'>&#8595;</span>
										)}
									</span>
								</button>
								{this.state.isDropdownOpen ? (
									<div className='navbar__dropdowncontainer'>
										<ul className='navbar__dropdown'>
											{this.props.dropdownContent.map((item, index) => (
												<li className='navbar__dropdownitem' key={index}>
													<Link
														to={`/${item.to}`}
														className='navbar__dropdownlink text--xtiny'>
														{item.text}
													</Link>
												</li>
											))}
										</ul>
									</div>
								) : null}
							</li>
						</ul>
					</nav>

					<div className='navbar__mobileview'>
						<Link to='/account'>
							<img src={this.props.personalPhoto} alt='user' className='navbar__personalphoto' />
						</Link>

						<Sidebar content={{ upperLinks: this.props.links, lowerLinks: this.props.dropdownContent }} />
					</div>
				</div>
			</header>
		);
	}
}
