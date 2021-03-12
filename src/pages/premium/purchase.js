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
				name: props.match.params.planName,
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
						<span className='text--small tex-white'>Get {this.state.planDetails.name}</span>
						<ul className='purchase__features'>
							{this.state.planDetails.features.map((item, index) => (
								<li className='purchase__features__item text--white' key={index}>
									&#10003; {item}
								</li>
							))}
						</ul>
					</div>
				</section>
			</>
		);
	}
}

export default withRouter(Purchase);
