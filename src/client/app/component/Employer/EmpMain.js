import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import EmpHeader from './EmpHeader';
import EmpWelcome from './EmpWelcome';
import EmpHowItWork from './EmpHowItWork';
import Footer from '../footer';

export class EmpMain extends Component{

	render() {
		return(
			<div>
				<EmpHeader />
				<EmpWelcome />
				<Footer />
			</div>
		)
	}
}

export default EmpMain;

