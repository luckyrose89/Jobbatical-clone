import React, {Component} from 'react';

class EmpHeading extends Component {
	render() {
		return (
			<header>
				<div className="header-styles">
					<div className="container-fluid">
						<section className="navbar-header visible-xs">
							<a href="/employer" className="navbar-brand">EmployersOnTheGo</a>
							<div className="pull-right navbar-right">
								<a href="/">JobsOnTheGo</a>							
								<a href="/employer/createjob">List Openings</a>
								<a href="/employer/demo"> Demo</a>

							</div>
						</section>
						<div className="hidden-xs">
							<ul className="nav navbar-nav">
								<li className="logo">
									<a href="/employer">EmployersOnTheGo</a>
								</li>
								<li className="hidden-xs">
									<a href="/">JobsOnTheGo</a>
								</li>
								<li className="hidden-xs">
									<a href="/employer/how-it-works">How It Works</a>
								</li>
								<li className="hidden-xs">
									<a href="/employer/pricing">Pricing</a>
								</li>
								<li className="hidden-xs">
									<a href="/testimonial">Testimonial</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="/employer/createjob">List Openings</a>
								</li>
								<li>
									<a href="/employer/demo">Demo</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default EmpHeading;