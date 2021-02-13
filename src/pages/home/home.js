import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import AlbumCard from "../../components/album_card/album_card";
import Footer from "../../components/footer/footer";
import {
	logo,
	personalPhoto,
	homeMainBannerContent,
	homeNavbarLinks,
	homeNavbarDropdownContent,
	homePlayerBannerContent,
	hometracks,
	footerData,
} from "../../utilities/consts";
import "../../app.css";
import "./home.css";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// logout will be a stand alone url and handle the actual logic in app.js

	render() {
		return (
			<>
				<Navbar
					bgColor='default'
					logo={logo}
					links={homeNavbarLinks}
					linkHoverColor='default'
					personalPhoto={personalPhoto}
					dropdownContent={homeNavbarDropdownContent}
				/>

				<section>
					<div className='home__main__banner'>
						<Banner content={homeMainBannerContent} />
					</div>
				</section>

				<section>
					<div className='container home__tracks'>
						<Banner content={homePlayerBannerContent} />
						<ul className='home__albums__list'>
							{hometracks.map((track, index) => (
								<li className='home__albums__list__item' key={index}>
									<AlbumCard
										img={track.img}
										title={track.title}
										artist={track.artist}
										link={track.link}
									/>
								</li>
							))}
						</ul>
					</div>
				</section>

				<Footer logo={logo} data={footerData} />
			</>
		);
	}
}
