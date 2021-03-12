import React, { Component } from "react";
import Button from "../button/button";
import "./premium_plan.css";

class PremiumPlan extends Component {
	render() {
		return (
			<div className='plan'>
				<div className='plan__description'>
					{this.props.content.description.map((item, index) => (
						<span
							className={`text--${item.type} text--${item.color} text--bg-${item.bgColor} plan__description__item`}
							key={index}>
							{item.text}
						</span>
					))}
				</div>
				<hr className='plan__separator' />
				<div className='plan__features'>
					{this.props.content.features.map((item, index) => (
						<div className='plan__features__item' key={index}>
							<span className='text--black text--small'>&#10003;</span>
							<span className='text--black text--xtiny plan__features__item__text'>{item}</span>
						</div>
					))}
				</div>
				<Button
					fg={this.props.content.navigateToPlan.fg}
					bg={this.props.content.navigateToPlan.bg}
					href={`premium/plan/${this.props.content.navigateToPlan.href}`}
					text={this.props.content.navigateToPlan.text}
				/>
				<div className='plan__terms'>
					<span className='text--black text--mid__tiny'>
						Terms and conditions apply. 1 month free not available for users who have already tried Premium.
					</span>
				</div>
			</div>
		);
	}
}

export default PremiumPlan;
