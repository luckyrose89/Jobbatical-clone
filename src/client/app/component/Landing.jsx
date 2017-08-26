import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './style.global.css';


import Heading from './header';
import Welcome from './welcome';
import Featured from './featuredJobs.js';
import PressQuotes from './press-quotes';
import Mission from './mission';
import Footer from './footer'

class Landing extends Component{
	render() {
		return(
			<div>
				<Heading />
				<Welcome />
				<Featured />
				<PressQuotes />	
				<Mission />
				<Footer />
			</div>
		)
	}
}

export default Landing;

