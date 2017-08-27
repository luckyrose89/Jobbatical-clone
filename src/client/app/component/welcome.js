import React, {Component} from 'react';

class Welcome extends Component {
	render() {
		return(
			<section className="landing">
				<div className="landing-title">
					<h1>
						Travel. Work.
						<br/>
						<strong>See The World</strong>
					</h1>
					<div className="landing-options">
						<a href="/jobs" className="btn btn-lg">
							Explore All Jobs
						</a>
						<a href="/employer" className="btn btn-lg">
							Hiring? Start Here
						</a>
					</div>
				</div>
				<p className="tagline">Find your dream job at dream destination...</p>
				<div className="background-wrap">
				</div>
				<div className="landing-numbers">
					Currently
					<strong> 48 teams </strong>
					in
					<strong> 23 Countries </strong>
					could use your help.
				</div>
			</section>

		)
	}
}

export default Welcome;