import React, {Component} from 'react';
import styles from './EmpPricing.scss';

import FontAwesome from 'react-fontawesome';

class EmpPricing extends Component {

	render() {
		return(
			<section className={ styles['pricing']}>				
				<div className={ styles['contact-for-more'] }>
					<h3 className={ styles['pricing-title'] }>Pricing</h3>
					<div className={ styles['pricing-content'] }>Contact Us for Details
						<div className={ styles['pricing-content-detail'] }>We are here to serve you!</div>
						<div className={ styles['pricing-content-detail'] }>Bundle options avaiable.</div>
					</div>
					<form action='/api/contact' method="post">
						<input type="hidden" name="inquiry" value="pricing" />
						<input className={ styles['more-email'] } type="text" name="email" placeholder="email@mail.com" />
					  	<input className={ styles['more-button'] } type="submit" value="Sumbit" />
					</form>
				</div>
			</section>

		)
	}
}

export default EmpPricing;