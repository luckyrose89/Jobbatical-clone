import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './testimonial-style.global.css';
import Header from '../Employer/EmpHeader';
import Footer from '../footer';
import logo from '../../../../../assets/images/logo.png';
import customer from '../../../../../assets/images/customer-girl.png';

class Testimonial extends Component {
	render() {
		return(
			<div>
				<Header />
				<section className="grey">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<div className="testimonial-header">
									<h2>Hiring Success with JobsOnTheGo</h2>
									<p>Read how our customers have benefitted from our services</p>
								</div>
							</div>
						</div>
						<div className="row customer-story">
							<div className="customer-story-content">
								<div className="logo-factorysoft">
									<img src={logo}/>
								</div>
								<div className="customer-header">
									<h2>From Miami to Lisbon</h2>
									<p>How FactorySoft found their senior developer</p>
								</div>
								<div className="customer-testimonial">
									<div className="customer-testimonial-wrap">
										<div className="customer-quote">
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus purus eu sapien iaculis vestibulum. Duis tempor, 
											nibh in vehicula scelerisquepien metus consequat augue, non porttitor orci sapien at orci."
										</div>
										<div className="customer-img">
											<img src={customer}/>
											<p className="customer-name">Hgsd Hsbjasja</p>
											<p className="customer-title">Hiring Manager, FactorySoft</p>
										</div>
									</div>
								</div>	
							</div>
						<a href="/" className="btn-read read-button">Read Full Story</a>
						</div>
						<div className="text-center end-story">
							<h3>Ready to hire some dynamic team members? Let us help you</h3>
							<div className="page-options">
								<a href="/employer/demo" className="btn-sign-up-today btn-request-demo">Requst a demo</a>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default Testimonial;