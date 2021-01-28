import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='sidebar'>
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
				</div>
			</div>
		);
	}
}
