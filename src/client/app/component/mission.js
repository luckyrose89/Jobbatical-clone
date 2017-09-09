import React, {Component} from 'react';

class Mission extends Component {
	render() {
		return(
			<section className="mission">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="">
								<h4>Our Mission</h4>
								<p>
									We are here to match all the world talents with the premier teams around the world. We believe that great worker and great workplace are meant to be together.
								</p>
								<a href="/signup" className="btn btn-lg">Sign Up Now</a>
								<p className="minor">*more planets coming soon.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Mission;