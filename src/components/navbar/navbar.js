import React, { Component } from "react";
import authContext from "../../context/auth";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
// ----------------- importing style sheets in strict order --------------------
import "../../variables.css";
import "./navbar.css";

export default class Navbar extends Component {
	static contextType = authContext;
	constructor(props) {
		super(props);
		this.state = {
			isSidebarOpen: false,
			isDropdownOpen: false,
		};

		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	toggleSidebar() {
		this.setState((state) => ({
			isSidebarOpen: !state.isSidebarOpen,
		}));
	}

	toggleDropdown() {
		this.setState((state) => ({
			isDropdownOpen: !state.isDropdownOpen,
		}));
	}

	render() {
		return (
			<header className={`navbar navbar-${this.props.bgColor}`}>
				<div className='navbar-container'>
					<div className='navbar-logo-container'>
						<Link to='/'>
							<img src={this.props.logo} className='navbar-logo' alt='Spotify' />
						</Link>
					</div>

					<nav className='navbar-desktop-view'>
						<ul className='navbar-links-list'>
							{this.props.links.map((data, i) => (
								<li className='navbar-link-container' key={i}>
									{"href" in data ? (
										<a
											href={`${data.href}`}
											className={`navbar-link-${this.props.linkHover}-hover`}>
											{data.text}
										</a>
									) : (
										<Link
											to={`/${data.to}`}
											className={`navbar-link-${this.props.linkHover}-hover`}>
											{data.text}
										</Link>
									)}
								</li>
							))}
							<li role='separator' className='navbar-vertical-separator'></li>
							<li className='navbar-link-container'>
								<button className='navbar-button' onClick={this.toggleDropdown}>
									<img src={this.props.personalPhoto} alt='user' className='navbar-personal-photo' />
									<span className='navbar-button-text'>
										profile
										{this.state.isDropdownOpen ? (
											<span className='navbar-dropdown-icon'>&#8593;</span>
										) : (
											<span className='navbar-dropdown-icon'>&#8595;</span>
										)}
									</span>
								</button>
								{this.state.isDropdownOpen ? (
									<div className='navbar-dropdown-container'>
										<ul className='navbar-dropdown'>
											{this.props.dropdownContent.map((item, index) => (
												<li className='navbar-dropdown-item'>
													<Link to={`/${item.href}`} className='navbar-dropdown-link'>
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

					<div className='navbar-mobile-view'>
						<Link to='/account' className=''>
							<img src={this.props.personalPhoto} alt='user' className='navbar-personal-photo' />
						</Link>

						<button className='navbar-button' onClick={this.toggleSidebar}>
							<span className='navbar-toggle-sidebar'>&#9776;</span>
						</button>
					</div>
				</div>

				{this.state.isSidebarOpen ? (
					<>
						<Sidebar content={this.props.links.concat(this.props.dropdownContent)} />
						<div className='overlay'></div>
					</>
				) : null}
			</header>
		);
	}
}
