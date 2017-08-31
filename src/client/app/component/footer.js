import FontAwesome from 'react-fontawesome';

import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return(
			<footer className="main-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-12 footer-section">
							<strong>For Talent</strong>
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/jobs">Explore Jobs</a>
								</li>
								<li>
									<a href="/">Join Now</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-section">
							<strong>For Business</strong>
							<ul>
								<li>
									<a href="/employer">What We offer</a>
								</li>
								<li>
									<a href="/employer/pricing">Pricing</a>
								</li>
								<li>
									<a href="/employer/pricing">Customers</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-section">
							<strong>JobsOnTheGo</strong>
							<ul>
								<li>
									<a href="/">Our Story & People</a>
								</li>
								<li>
									<a href="/">Support</a>
								</li>
								<li>
									<a href="/">Blog</a>
								</li>
								<li>
									<a href="/">Join the team</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-12 footer-section social">
							<strong>Follow Us</strong>
							<ul>
								<li>
									<a>Facebook</a>
									<span className="socialIcon">
										<img src=""/>
										<FontAwesome
									        className='social'
									        name='facebook-official'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />
									</span>
								</li>
								<li>
									<a>Twitter</a>
									<span className="socialIcon">
										<img src=""/>
										<FontAwesome
									        className='social'
									        name='twitter-square'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />
									</span>
								</li>
								<li>
									<a>Google Plus</a>
									<span className="socialIcon">
										<img src=""/>
										<FontAwesome
									        className='social'
									        name='google-plus-official'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />
									</span>
								</li>
								<li>
									<a>Instagram</a>
									<span className="socialIcon">
										<img src=""/>
										<FontAwesome
									        className='social'
									        name='instagram'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />									</span>
								</li>
								<li>
									<a href="/">LinkedIn</a>
									<span className="socialIcon">
										<img src=""/>
										<FontAwesome
									        className='social'
									        name='linkedin-square'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="company-info">
					<div className="container">
						<p className="text-center">&copy; JobsOnTheGo 2017 Lorem Ipsum Dolor Se</p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;