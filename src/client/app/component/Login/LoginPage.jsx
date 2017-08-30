import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './login-style.global.css';
import facebook from '../../../../../assets/images/facebook.png';
import google from '../../../../../assets/images/search.png';
import linkedin from '../../../../../assets/images/linkedin.png';

class Login extends Component {
	render() {
		return(
			<div className="formWrapper">
				<div className="container">
					<section className="form-container">
						<div className="row">
							<div className="col-md-12">
								<section className="auth-container">
									<form>
										<div className="form-header">
											Log In to JobsOnTheGo
										</div>
										<section className="login-section">
											<div className="facebook-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={facebook}/>
													</div>
													<div className="form-link">
														<a href="/">Login with facebook</a>
													</div>
												</div>
											</div>
											<div className="google-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={google}/>
													</div>
													<div className="form-link">
														<a href="/">Login with Google</a>
													</div>
												</div>
											</div>
											<div className="linkedin-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={linkedin}/>
													</div>
													<div className="form-link">
														<a href="/">Login with Linkedin</a>
													</div>
												</div>
											</div>
											<div className="text-center form-divider">
												<span>
													<span className="divide-text">or</span>
												</span>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
													<label for="user">Your Email</label>
													<input type="email" name="email" placeholder="user@email.com"/>
												</div>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
													<label for="password">Password</label>
													<input type="password" name="password"/>
												</div>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
														<button className="btn btn-success btn-lg btn-block">LOG IN</button>
												</div>
											</div>
											<div className="login-footer hidden-xs">
												<ul>
													<li><a href="/forgot">Forgot Password?</a></li>
													<li><a href="/signup">Sign Up</a></li>
												</ul>
											</div>
											<div className="visible-xs">
												<a href="/forgot">Forgot Password?</a>
											</div>
										</section>
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

export default Login;