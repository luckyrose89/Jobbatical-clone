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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis tempor tempor. Fusce non felis est. Maecenas varius augue ligula, ut blandit nisl tincidunt quis. Etiam varius velit at maximus commodo. Nulla condimentum accumsan augue nec convallis. 
								</p>
								<a href="/" className="btn btn-lg">Join</a>
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