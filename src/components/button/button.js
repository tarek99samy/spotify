import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default class Button extends Component {
	render() {
		return (
			<div className='btn'>
				<Link className={`btn btn-fg-${this.props.fg} btn-bg-${this.props.bg}`} to={`/${this.props.href}`}>
					{this.props.text}
				</Link>
			</div>
		);
	}
}
