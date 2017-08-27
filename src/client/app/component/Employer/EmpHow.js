import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import EmpHeader from './EmpHeader';
import EmpHowItWork from './EmpHowItWork';
import Footer from '../footer';

export class EmpHow extends Component{

	render() {
		return(
			<div>
				<EmpHeader />
				<EmpHowItWork />
				<Footer />
			</div>
		)
	}
}

export default EmpHow;

