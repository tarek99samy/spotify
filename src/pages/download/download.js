import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import {
	logo,
	personalPhoto,
	navbarLinks,
	navbarDropdownContent,
	footerData,
	downloadSotres,
	downloadMainBannerContent,
	labtop,
	greenCircle,
	greenSuccessCheck,
	devices,
	downloadDevicesBannerContent,
} from "../../utilities/consts";
import "./download.css";

class Download extends Component {
	render() {
		return (
			<>
				<Navbar
					bgColor='black'
					logo={logo}
					links={navbarLinks}
					linkHoverColor='default'
					personalPhoto={personalPhoto}
					dropdownContent={navbarDropdownContent}
				/>

				<section className='download__main__section'>
					<div className='container download__main__banner'>
						<div className='download__main__banner__drawing'>
							<img src={labtop} className='download__drawing__labtop' alt='' />
							<img src={greenCircle} className='download__drawing__circle' alt='' />
							<img src={greenSuccessCheck} className='download__drawing__check' alt='' />
						</div>
						<Banner content={downloadMainBannerContent} />
					</div>
				</section>

				<section>
					<div className='container download__stores'>
						<h2>Bring your music to mobile and tablet, too.</h2>
						<span className='text--xtiny'>Listening on your phone or tablet is free, easy, and fun.</span>
						<div className='download__stores__logos'>
							{downloadSotres.map((item, index) => (
								<a href={item.href} className='download__stores__link' key={index}>
									<img src={item.logo} alt={item.text} />
								</a>
							))}
						</div>
					</div>
				</section>

				<section className='download__devices__section'>
					<div className='container download__devices__banner'>
						<div className='download__devices__banner__drawing'>
							<img src={devices} className='download__devices' alt='' />
						</div>
						<Banner content={downloadDevicesBannerContent} />
					</div>
				</section>

				<Footer logo={logo} data={footerData} />
			</>
		);
	}
}

export default Download;
