import React, { Component } from "react";
import { logo, navbarLinks, personalPhoto, navbarDropdownContent, purchaseInfo } from "../../utilities/consts";
import Navbar from "../../components/navbar/navbar";
import "./purchase.css";
import { withRouter } from "react-router-dom";

class Purchase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			planDetails: { name: "", price: "", features: [] },
		};
	}

	componentDidMount() {
		this.setState((state, props) => ({
			planDetails: {
				name:
					props.match.params.planName === "individual"
						? "Premium"
						: props.match.params.planName[0].toUpperCase() + props.match.params.planName.slice(1),
				price: purchaseInfo[props.match.params.planName].price,
				features: purchaseInfo[props.match.params.planName].features,
			},
		}));
	}

	render() {
		console.log(this.state.planDetails);
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
				<section className='purchase__banner'>
					<div className='purchase__preview container'>
						<span className='text--large text--white'>Get {this.state.planDetails.name}</span>
						<ul className='purchase__features'>
							{this.state.planDetails.features.map((item, index) => (
								<li className='purchase__features__item text--white text--xtiny' key={index}>
									&#10003; {item}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className='purchase__main'>
					<div className='purchase__main__details'>
						<span className='text--white text--xtiny text--bg-light-blue purchase__trial__text'>
							1-month free trial
						</span>
						<span className='text--black text--xtiny'>Spotfy Premium {this.state.planDetails.name}</span>
						<span className='text--black text--xtiny purchase__price__text'>
							{this.state.planDetails.price}
						</span>
						<span className='text--black text--xtiny'>Cancel anytime. Offer terms apply</span>
					</div>
					{/* <div className="purchase__payment">
						<form>
							<input
								type='tel'
								autoComplete='cc-number'
								pattern='[0-9]*'
								placeholder='0000 0000 0000 0000'
								onChange={}
							/>
							<input type='tel' autoComplete='cc-exp' placeholder='MM / YY' onChange={} />
							<input
								type='number'
								autocomplete='off'
								pattern='[0-9]*'
								placeholder='Security code'
								onChange={}
							/>
						</form>
					</div> */}
				</section>
			</>
		);
	}
}

export default withRouter(Purchase);
