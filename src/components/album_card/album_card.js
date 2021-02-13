import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./album_card.css";

class AlbumCard extends Component {
	render() {
		return (
			<figure className='albumcard'>
				<img src={this.props.img} alt='img' className='albumcard__img' />
				<div className='albumcard__overlay'>
					<div className='albumcard__details__desktop'>
						<h2 className='albumcard__title'>{this.props.title}</h2>
						<h4 className='albumcard__artist'>{this.props.artist}</h4>
						<Link to={this.props.link} className='albumcard__playnow'>
							Play Now
						</Link>
					</div>
				</div>
				<div className='albumcard__details__mobile'>
					<h2 className='albumcard__title'>{this.props.title}</h2>
					<h4 className='albumcard__artist'>{this.props.artist}</h4>
					<Link to={this.props.link} className='albumcard__playnow'>
						Play Now
					</Link>
				</div>
			</figure>
		);
	}
}

export default AlbumCard;
