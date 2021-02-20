import React, { Component } from "react";
import Button from "../button/button";
import "./banner.css";

export default class Banner extends Component {
	render() {
		return (
			<div className='banner'>
				{this.props.content.map((element, index) =>
					element.type === "link" ? (
						<Button
							fg={element.fg}
							bg={element.bg}
							href={element.href}
							text={element.text}
							isDownload={element.isDownload}
							filename={element.filename}
							key={index}
						/>
					) : element.type === "list" ? (
						<div className='banner__item' key={index}>
							<ul className='banner__list'>
								{element.items.map((item, idx) => (
									<li className='banner__list__item text--white text--xtiny' key={idx}>
										{item}
									</li>
								))}
							</ul>
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
