import React, { Component } from "react";
import Button from "../button/button";
import "./banner.css";

export default class Banner extends Component {
	render() {
		return (
			<div className='banner'>
				{this.props.content.map((element, index) =>
					element.type === "link" ? (
						<Button fg={element.fg} bg={element.bg} href={element.href} text={element.text} key={index} />
					) : element.type === "list" ? (
						<div className='banner__item'>
							<ul className='banner__list' key={index}>
								{element.items.map((item, idx) => (
									<li className='banner__list__item' key={idx}>
										{item}
									</li>
								))}
							</ul>
						</div>
					) : element.text.includes("Terms") ? (
						<div className='banner__item banner__item--cst' key={index}>
							<span className={`text--${element.type} text--${element.color}`}>{element.text}</span>
						</div>
					) : (
						<div className='banner__item' key={index}>
							<span className={`text--${element.type} text--${element.color}`}>{element.text}</span>
						</div>
					)
				)}
			</div>
		);
	}
}
