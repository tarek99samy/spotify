import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logo, navbarLinks, personalPhoto, navbarDropdownContent, purchaseInfo } from "../../utilities/consts";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import "./purchase.css";

class Purchase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			planDetails: { name: "", price: "", features: [] },
			paymentData: { cardNumber: 0, expireDate: "", securityCode: "" },
		};

		this.handlePaymentInput = this.handlePaymentInput.bind(this);
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

	handlePaymentInput(event) {
		this.setState({ paymentDate: { card: event.target.value } });
	}

	render() {
		console.log(this.state.paymentData);
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
					<div className='purchase__payment'>
						<form className='purchase__payment__form'>
							<input
								className='purchase__payment__form__input'
								type='number'
								name='cardNumber'
								pattern='[0-9]*'
								placeholder='0000 0000 0000 0000'
								onChange={this.handlePaymentInput}
							/>
							<input
								className='purchase__payment__form__input'
								type='number'
								name='expireDate'
								placeholder='MM / YY'
								onChange={this.handlePaymentInput}
							/>
							<input
								className='purchase__payment__form__input'
								type='number'
								name='securityCode'
								pattern='[0-9]*'
								placeholder='Security code'
								onChange={this.handlePaymentInput}
							/>
						</form>
					</div>
					<Button fg='white' bg='green' href='' text='Buy Spotify Premium Duo' />
				</section>
			</>
		);
	}
}

export default withRouter(Purchase);
