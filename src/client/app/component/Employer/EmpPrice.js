import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import EmpHeader from './EmpHeader';
import EmpPricing from './EmpPricing'
import Footer from '../footer';

export class EmpPrice extends Component{

	render() {
		return(
			<div>
				<EmpHeader />
				<EmpPricing />
				<Footer />
			</div>
		)
	}
}

export default EmpPrice;

