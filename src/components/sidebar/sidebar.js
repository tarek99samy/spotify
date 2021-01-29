import React, { Component } from "react";
import { Link } from "react-router-dom";
// ----------------- importing style sheets in strict order --------------------
import "../../variables.css";
import "./sidebar.css";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSidebarOpen: false,
		};

		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar() {
		this.setState((state) => ({
			isSidebarOpen: !state.isSidebarOpen,
		}));
	}

	render() {
		return (
			<>
				<div className='sidebar-toggle' onClick={this.toggleSidebar}>
					&#9776;
				</div>

				{this.state.isSidebarOpen ? <div className='overlay' onClick={this.toggleSidebar}></div> : null}

				<div className={`sidebar-active ${!this.state.isSidebarOpen ? "sidebar-inactive" : null}`}>
					<div className='sidebar-toggle sidebar-close-icon' onClick={this.toggleSidebar}>
						&times;
					</div>
					<ul className='sidebar-content'>
						{this.props.content.lg.map((data, i) => (
							<li className='sidebar-item' key={i}>
								{"href" in data ? (
									<a href={`${data.href}`} className={`sidebar-link sidebar-link-lg`}>
										{data.text}
									</a>
								) : (
									<Link to={`/${data.to}`} className={`sidebar-link sidebar-link-lg`}>
										{data.text}
									</Link>
								)}
							</li>
						))}
						<li role='separator' className='horizontal-separator'></li>
						{this.props.content.md.map((data, i) => (
							<li className='sidebar-item' key={i}>
								<Link to={`/${data.to}`} className='sidebar-link sidebar-link-md'>
									{data.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</>
		);
	}
}
