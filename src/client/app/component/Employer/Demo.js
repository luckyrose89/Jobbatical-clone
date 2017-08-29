import React, {Component} from 'react';
import styles from './Demo.scss';

import FontAwesome from 'react-fontawesome';

class Demo extends Component {
	render() {
		return(
			<section className='demo'>
				<div className={ styles['contact-for-more'] }>
					<h3>Demo Time</h3>
					<div>Contact Us for a fabulous demo</div>
					<form action='/api/contact' method="post">
						<input type="hidden" name="inquiry" value="demo" />
						<input type="text" name="email" placeholder="youremail@mail.com" />
					  	<input type="submit" value="Sumbit" />
					</form>
				</div>
			</section>

		)
	}
}

export default Demo;