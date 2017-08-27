import React, {Component} from 'react';
import styles from './EmpPricing.scss';

import FontAwesome from 'react-fontawesome';

class EmpPricing extends Component {
	render() {
		return(
			<section className='pricing'>
				<div className={ styles['contact-for-more'] }>
					<h3>Pricing</h3>
					<div>Contact Us for Details</div>
					<input type="text" placeholder="youremail@mail.com" />
				  	<input type="button"value="Sumbit" />
				</div>
			</section>

		)
	}
}

export default EmpPricing;