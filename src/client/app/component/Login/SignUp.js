import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './login-style.global.css';
import facebook from '../../../../../assets/images/facebook.png';
import google from '../../../../../assets/images/search.png';
import telephone from '../../../../../assets/images/telephone-operator.svg';
import {
  signupUserStart,
  signupUserRequest,
  fetchUserStart,
  fetchUserRequest,
} from '../../action';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasTried: false,
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ hasTried: true });
    this.props.signup(this.state.email, this.state.password);
  }

	render() {
    if (this.props.user) {
      // already logged in
      return <Redirect to="/" />
    }

    const emailUsed = this.state.hasTried && !this.props.isSigningup;

		return(
			<div className="formWrapper wrapper-signup">
				<div className="container main-auth">
					<section className="sign-in">
						<div className="row">
							<div className="col-md-12">
								<div className="signup-header hidden-xs">
									<div className="signup-header-img">
										<img src={telephone}/>
									</div>
									<div className="signup-header-p">
										<p>Sign up for a JobsOnTheGo account and explore the various opportunities in store for you today</p>
									</div>
								</div>
								<section className="auth-container signup-auth">
									<div className="signup-header small-display visible-xs">
										<div className="small-scr-img">
											<img src={telephone}/>
										</div>
										<div className="small-scr-p">
											<p>Sign up for a JobsOnTheGo account and explore the various opportunities in store for you today</p>
										</div>
									</div>
									<form onSubmit={this.handleSubmit}>
										<section className="signup-section">
											<div className="facebook-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={facebook}/>
													</div>
													<div className="form-link">
														<a href="/auth/facebook">Login with facebook</a>
													</div>
												</div>
											</div>
											<div className="google-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={google}/>
													</div>
													<div className="form-link">
														<a href="/auth/google">Login with Google</a>
													</div>
												</div>
											</div>
											<div className="text-center form-divider">
												<span>
													<span className="divide-text">or</span>
												</span>
											</div>
											<div className="form-signup row">
												<div className="row">
													<div className="col-md-6 col-sm-6 col-xs-12">
														<div className="form-signup zero-margin">
															<label for="first-name">First Name</label>
															<input type="text" placeholder="First Name" name="firstname" />
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6 col-sm-6 col-xs-12">
														<div className="form-signup zero-margin">
															<label for="last-name">Last Name</label>
															<input type="text" placeholder="Last Name" name="lastname" />
														</div>
													</div>
												</div>
												<div className="form-detail">
												<div className="row">
													<div className="col-md-12">
														<label for="user">Your Email</label>
														<input
                              type="email"
                              name="email"
                              placeholder="user@email.com"
                              onChange={this.handleEmailInput}
                            />
													</div>
												</div>
												</div>
												<div className="form-detail">
												<div className="row">
													<div className="col-md-12">
														<label for="password">Password</label>
														<input
                              type="password"
                              name="password"
                              onChange={this.handlePasswordInput}
                            />
													</div>
												</div>
												</div>
												<div className="form-detail">
													<div className="col-md-12">
                              {emailUsed && <span>Email used!</span>}
															<button className="btn btn-success btn-lg btn-block">Sign Up</button>
													</div>
												</div>
												<div className="signup-footer">
													<Link to="/">HomePage</Link>
												</div>
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

const mapStateToProps = state => ({
  user: state.user,
  isSigningup: state.isSigningup,
});

const mapDispatchToProps = dispatch => ({
  signup: (email, password) => {
    dispatch(signupUserStart());
    return dispatch(signupUserRequest(email, password));
  },
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
