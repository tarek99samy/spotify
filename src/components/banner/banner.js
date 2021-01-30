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
						<div className='banner-item'>
							<ul className='banner-list' key={index}>
								{element.items.map((item, idx) =>
									idx === 0 ? (
										<li className='banner-list-item-cst' key={idx}>
											{item}
										</li>
									) : (
										<li className='banner-list-item' key={idx}>
											{item}
										</li>
									)
								)}
							</ul>
						</div>
					) : (
						<div className='banner-item'>
							<span className={`text-${element.type} text-${element.color}`} key={index}>
								{element.text}
							</span>
						</div>
					)
				)}
			</div>
		);
	}
}
