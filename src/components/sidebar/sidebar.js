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
				<div className='sidebar__toggle text--small' onClick={this.toggleSidebar}>
					&#9776;
				</div>

				{this.state.isSidebarOpen ? <div className='overlay' onClick={this.toggleSidebar}></div> : null}

				<div className={`sidebar ${!this.state.isSidebarOpen ? "sidebar__inactive" : "sidebar__active"}`}>
					<div className='sidebar__toggle sidebar__closeicon' onClick={this.toggleSidebar}>
						&times;
					</div>
					<ul className='sidebar__content'>
						{this.props.content.upperLinks.map((data, i) => (
							<li className='sidebar__item' key={i}>
								{"href" in data ? (
									<a href={`${data.href}`} className={`sidebar__link text--xmedium`}>
										{data.text}
									</a>
								) : (
									<Link to={`/${data.to}`} className={`sidebar__link text--xmedium`}>
										{data.text}
									</Link>
								)}
							</li>
						))}
						<li role='separator' className='sidebar__horizontalseparator'></li>
						{this.props.content.lowerLinks.map((data, i) => (
							<li className='sidebar__item' key={i}>
								<Link to={`/${data.to}`} className='sidebar__link text--small'>
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
