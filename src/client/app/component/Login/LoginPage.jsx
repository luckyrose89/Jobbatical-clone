import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './login-style.global.css';
import facebook from '../../../../../assets/images/facebook.png';
import google from '../../../../../assets/images/search.png';
import linkedin from '../../../../../assets/images/linkedin.png';
import {
  loginUserStart,
  loginUserRequest,
  fetchUserStart,
  fetchUserRequest,
} from '../../action';

class Login extends Component {
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
    this.props.login(this.state.email, this.state.password);
  }

	render() {
    if (this.props.user) {
      // already logged in
      const url = this.props.location.state ?
        this.props.location.state.redirect :
        '/';
      return <Redirect to={url} />
    }

    const wrongPassword = this.state.hasTried && !this.props.isLoggingIn;

		return(
			<div className="formWrapper">
				<div className="container">
					<section className="form-container">
						<div className="row">
							<div className="col-md-12">
								<section className="auth-container">
									<form onSubmit={this.handleSubmit}>
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
											<div className="linkedin-box socialMediaBox">
												<div className="form-button">
													<div className="form-icon">
														<img src={linkedin}/>
													</div>
													<div className="form-link">
														<Link to="/">Login with Linkedin</Link>
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
													<input
                            type="email"
                            name="email"
                            placeholder="user@email.com"
                            onChange={this.handleEmailInput}
                          />
												</div>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
													<label for="password">Password</label>
													<input
                            type="password"
                            name="password"
                            onChange={this.handlePasswordInput}
                          />
                          {wrongPassword &&
                            <span>Invalid email/password</span>}
												</div>
											</div>
											<div className="form-detail">
												<div className="col-md-12">
                          <button
                            className="btn btn-success btn-lg btn-block"
                            disabled={this.props.isLoggingIn}
                          >LOG IN</button>
												</div>
											</div>
											<div className="login-footer hidden-xs">
												<ul>
													<li><Link to="/forgot">Forgot Password?</Link></li>
													<li><Link to="/signup">Sign Up</Link></li>
												</ul>
											</div>
											<div className="visible-xs">
												<Link to="/forgot">Forgot Password?</Link>
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
  isLoggingIn: state.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(loginUserStart());
    return dispatch(loginUserRequest(email, password));
  },
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
