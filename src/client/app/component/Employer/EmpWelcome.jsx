import React, {Component} from 'react';
import styles from './EmpWelcome.scss';
import 'bootstrap/dist/css/bootstrap.css';

class EmpWelcome extends Component {
	render() {
		return(
			<section className={ styles['landing'] }>
				<div className={ styles["landing-title"]}>
					<h1>
						<strong>Reach Talents
						<br/>
						Enhance Your Team</strong>
					</h1>

					<h4 className={ styles["tagline"] }>Booster! JobsOnTheGo connects you with top talents around the world!</h4>
					<div className={ styles["landing-options"]}>
						<a href="/employer/createjob" className={ styles["landing-options-btn"]} >
							List An Opening
						</a>
						<br/>
						<a href="/employer/demo" className={ styles["landing-options-btn"]} >
							Request Demo
						</a>
					</div>

				</div>
				<div className={ styles["background-wrap"] }>
				</div>
				<div className={ styles["landing-numbers"] }>
					Post openings for
					<strong> FREE </strong>
					<br/>
					<strong> 23 Countries </strong>
					full of talents awaits.
				</div>
			</section>

		)
	}
}

export default EmpWelcome;