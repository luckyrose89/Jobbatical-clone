import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './login-style.global.css';


class ForgotPass extends Component {
	render() {
		return(
			<div className="formWrapper">
				<div className="container">
					<section className="form-container">
						<div className="row">
							<div className="col-md-12">
								<section className="auth-container">
									<form>
										<section className="login-section">
											<div className="reset-content">
												<h1>Reset Your Password</h1>
												<p className="reset-para">Enter your email address in the following form to recive password resetting details from JobsOnTheGo team.</p>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
													<label for="user" className="email-label">Your Email</label>
													<input type="email" className="email-input" placeholder="user@email.com"/>
												</div>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
														<button className="btn btn-success btn-lg btn-block hidden-xs password">Get My Password</button>
														<button className="btn btn-success btn-lg btn-block visible-xs">Get My Password</button>
												</div>
											</div>
										</section>
										<div className="pass-footer">
												<div className="login-footer hidden-xs">
													<ul>
														<li><a href="/">Home Page</a></li>
														<li><a href="/signup">Sign Up</a></li>
													</ul>
												</div>
												<div className="visible-xs">
													<a href="/signup">Sign Up</a>
												</div>
										</div>
									</form>
								</section>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}
} 

export default ForgotPass;

