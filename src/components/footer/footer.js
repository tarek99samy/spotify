import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../pages/home/home.css";
import "./footer.css";

class Footer extends Component {
	render() {
		console.log("rendered");
		return (
			<footer className='footer'>
				<div className='home__tracks__container footer__container'>
					<div className='footer__logo__container'>
						<Link to='/'>
							<img src={this.props.logo} className='footer__logo' alt='Spotify' />
						</Link>
					</div>
					<div className='footer__nav__container'>
						<dl className='footer__list'>
							<dt className='footer__list__head'>header</dt>
							<dd className='footer__list__item'>
								<Link to='/'>item</Link>
							</dd>
							<dd className='footer__list__item'>
								<Link to='/'>item</Link>
							</dd>
							<dd className='footer__list__item'>
								<Link to='/'>item</Link>
							</dd>
						</dl>
					</div>
					<div className='footer__media__container'>
						<ul className='footer__media__list'>
							<li className='footer__media__list__item'></li>
							<li className='footer__media__list__item'></li>
							<li className='footer__media__list__item'></li>
						</ul>
					</div>
					<div className='footer__policy__container'>
						<ul className='footer__policy__list'>
							<li className='footer__policy__list__item'></li>
							<li className='footer__policy__list__item'></li>
							<li className='footer__policy__list__item'></li>
						</ul>
						<span className="footer__policy__copyrights">© 2021 Spotify AB</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
