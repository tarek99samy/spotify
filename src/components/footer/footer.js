import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../variables.css";
import "./footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<div className='container footer__container'>
					<div className='footer__logo__container'>
						<Link to='/'>
							<img src={this.props.logo} className='footer__logo' alt='Spotify' />
						</Link>
					</div>
					<div className='footer__nav__container'>
						{this.props.data.navLists.map((list, index1) => (
							<dl className='footer__list' key={index1}>
								<dt className='text--mid__tiny footer__list__head'>{list.header}</dt>
								{list.links.map((item, index2) => (
									<dd className='text--xtiny footer__list__item' key={index2}>
										<a href={item.href}>{item.text}</a>
									</dd>
								))}
							</dl>
						))}
					</div>
					<div className='footer__media__container'>
						<ul className='footer__media__list'>
							{this.props.data.socialMedia.map((item, index) => (
								<li className='footer__media__list__item' key={index}>
									<a href={item.href} className='footer__list__item__link'>
										<span className={`footer__media footer__media--${item.class}`}></span>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='footer__policy__container'>
						<ul className='footer__policy__list'>
							{this.props.data.policy.map((item, index) => (
								<li className='text--mid__tiny footer__policy__list__item' key={index}>
									<a href={item.href}>{item.text}</a>
								</li>
							))}
						</ul>
						<span className='text--mid__tiny footer__policy__copyrights'>© 2021 Spotify AB</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
