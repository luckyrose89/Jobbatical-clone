import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchUserStart,
  fetchUserRequest,
  logoutUserStart,
  logoutUserRequest,
} from '../action';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  logout() {
    if (!this.props.isLoggingOut) {
      this.props.logout();
    }
  }

	render() {
		return (
			<header>
				<div className="header-styles">
					<div className="container-fluid">
						<section className="navbar-header visible-xs">
							<Link to="/" className="navbar-brand">JobsOnTheGo</Link>
							<div className="pull-right navbar-right">
								{!this.props.user && <Link to="/login">Log In</Link>}
								{!this.props.user && <Link to="/signup">Join</Link>}
                {this.props.user &&
                  <Link to="/logout" onClick={this.logout}>Logout</Link>}
							</div>
						</section>
						<div className="hidden-xs">
							<ul className="nav navbar-nav">
								<li className="logo">
									<Link to="/">JobsOnTheGo</Link>
								</li>
								<li className="hidden-xs">
									<Link to="/jobs">Explore Jobs</Link>
								</li>
								<li className="hidden-xs">
                  {this.props.user &&
                    <Link to="/saved-jobs">Saved jobs</Link>}
								</li>
								<li className="hidden-xs">
                  {this.props.user &&
                    <Link to="/applied-jobs">Applied jobs</Link>}
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								{!this.props.user && <li>
									<Link to="/login">Log In</Link>
								</li>}
								{!this.props.user && <li>
									<Link to="/signup">Join</Link>
								</li>}
                {this.props.user && <li>
                  <Link to="/" onClick={this.logout}>Logout</Link>
                </li>}
								<li>
									<Link to="/employer">For The Employers</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

const mapStateToProps = state => ({
  user: state.user,
  isLoggingOut: state.isLoggingOut,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
  logout: () => {
    dispatch(logoutUserStart());
    return dispatch(logoutUserRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
