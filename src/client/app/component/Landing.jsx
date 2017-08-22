import React, {Component} from 'react';
<<<<<<< HEAD
require('bootstrap/dist/css/bootstrap.css');
require('./style.css');
=======
import 'bootstrap/dist/css/bootstrap.css';
import './style.global.css';
>>>>>>> b8f5e52c4962452d1fd80b054465a4150fb17a5b

import Heading from './header';
import Welcome from './welcome';
import PressQuotes from './press-quotes';
import Mission from './mission';
import Footer from './footer'

class Landing extends Component{
	render() {
		return(
			<div>
				<Heading />
				<Welcome />
				<PressQuotes />	
				<Mission />
				<Footer />
			</div>
		)
	}
}

export default Landing;
<<<<<<< HEAD

=======
>>>>>>> b8f5e52c4962452d1fd80b054465a4150fb17a5b
