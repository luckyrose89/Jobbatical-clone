import React, {Component} from 'react';

class Heading extends Component {
	render() {
		return (
			<header>
				<div className="header-styles">
					<div className="container-fluid">
						<section className="navbar-header visible-xs">
							<a href="/" className="navbar-brand">JobsOnTheGo</a>
							<div className="pull-right navbar-right">
								<a href="/">Log In</a>
								<a href="/">Join</a>
							</div>
						</section>
						<div className="hidden-xs">
							<ul className="nav navbar-nav">
								<li className="logo">
									<a href="/">JobsOnTheGo</a>
								</li>
								<li className="hidden-xs">
									<a href="/jobs">Explore Jobs</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="/">Log In</a>
								</li>
								<li>
									<a href="/">Join</a>
								</li>
								<li>
									<a href="/">For The Employers</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Heading;