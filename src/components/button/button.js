import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default class Button extends Component {
	render() {
		return (
			<div>
				{this.props.isDownload ? (
					<a
						href='/'
						className={`btn text--xtiny btn--fg__${this.props.fg} btn--bg__${this.props.bg}`}
						download={this.props.filename}>
						{this.props.text}
					</a>
				) : (
					<Link
						className={`btn text--xtiny btn--fg__${this.props.fg} btn--bg__${this.props.bg}`}
						to={`/${this.props.href}`}
						onClick={this.props.callback}>
						{this.props.text}
					</Link>
				)}
			</div>
		);
	}
}
