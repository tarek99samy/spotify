import React, { Component } from "react";
import {
	premiumBannerContent,
	whyPremium,
	premiumPlans,
	logo,
	footerData,
	navbarLinks,
	personalPhoto,
	navbarDropdownContent,
} from "../../utilities/consts";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import PremiumPlan from "../../components/premium_plan/premium_plan";
import "./premium.css";

class Premium extends Component {
	render() {
		return (
			<>
				<Navbar
					bgColor='transparent'
					logo={logo}
					links={navbarLinks}
					linkHoverColor='default'
					personalPhoto={personalPhoto}
					dropdownContent={navbarDropdownContent}
				/>

				<section className='premium__banner__section'>
					<div className='container premium__banner'>
						<Banner content={premiumBannerContent} />
					</div>
				</section>

				<section>
					<div className='container'>
						<span className='text--white text--xmedium'>Why go Premium?</span>
						<ul className='premium__why'>
							{whyPremium.map((plan, index1) => (
								<li className='premium__why__item' key={index1}>
									<div className='premium__why__item__img'>
										<img src={plan.img} alt='' className='' />
									</div>
									<div className='premium__why__item__desc'>
										{plan.description.map((desc, index2) => (
											<span className={`text--${desc.type} text--${desc.color}`} key={index2}>
												{desc.text}
											</span>
										))}
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section>
					<div className='container premium__plans__section'>
						<span className='text--black text--medium'>Pick your Premium</span>
						<span className='text--black text--xtiny'>
							Listen without limits on your phone, speaker, and other devices.
						</span>

						<div className='premium__plans__list'>
							{premiumPlans.map((plan, index) => (
								<PremiumPlan content={plan} key={index} />
							))}
						</div>
					</div>
				</section>

				<Footer logo={logo} data={footerData} />
			</>
		);
	}
}

export default Premium;
