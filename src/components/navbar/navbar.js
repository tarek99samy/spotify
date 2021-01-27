import React, { Component } from "react";
import authContext from "../../context/auth";
import { Link } from "react-router-dom";
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

					<nav>
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
											<span className='navbar-dropdown-icon'>&#8743;</span>
										) : (
											<span className='navbar-dropdown-icon'>&#8744;</span>
										)}
									</span>
								</button>
								{/* {this.state.isDropdownOpen ? (
									<div id='profile-dropdown-menu' className='profile-menu'>
										<ul className='menu'>
											<li className='menu-item'>
												<Link to='/' className='profile-item'>
													Account
												</Link>
											</li>
											<li className='menu-item'>
												<Link to='/' className='profile-item'>
													Log out
												</Link>
											</li>
										</ul>
									</div>
								) : null} */}
							</li>
						</ul>
					</nav>

					{/*<div id='responsive-replacement'>
						<Link to='/' className='nav-link'>
							<img src={navbarPhoto} alt='user' className='nav-photo' />
						</Link>

						<button className='nav-button' onClick={this.toggleSidebar}>
							<span className='open-sidebar-button'>&#9776;</span>
						</button>
					</div> */}
				</div>

				{/* {this.state.isSidebarOpen ? <div className='responsive-overlay'></div> : null}

				<div id='side-nav' className={this.state.isSidebarOpen ? "sidebar-opened" : "sidebar-closed"}>
					<div className='close-sidebar-button'>
						<span onClick={this.toggleSidebar}>&times;</span>
					</div>
					<ul>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Premium
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Support
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Download
							</Link>
						</li>
						<li role='separator' className='horizontal-separator'></li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								Account
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								Log out
							</Link>
						</li>
					</ul>
				</div> */}
			</header>
		);
	}
}
