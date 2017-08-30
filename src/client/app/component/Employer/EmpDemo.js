import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import EmpHeader from './EmpHeader';
import Demo from './Demo'
import Footer from '../footer';

export class EmpDemo extends Component{

	render() {
		return(
			<div>
				<EmpHeader />
				<Demo />
				<Footer />
			</div>
		)
	}
}

export default EmpDemo;

