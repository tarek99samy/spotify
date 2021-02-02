import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default class Button extends Component {
	render() {
		return (
			<div>
				<Link
					className={`btn text--xtiny btn--fg__${this.props.fg} btn--bg__${this.props.bg}`}
					to={`/${this.props.href}`}>
					{this.props.text}
				</Link>
			</div>
		);
	}
}
