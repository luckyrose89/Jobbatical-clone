import React from 'react';
import { connect } from 'react-redux';

import {
  fetchUserStart,
  fetchUserRequest,
  loginUserStart,
  loginUserRequest,
  logoutUserStart,
  logoutUserRequest,
} from '../action';

export class AuthDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  handleLogout(evt) {
    evt.preventDefault();
    this.props.logout();
  }

  handleEmailInput(evt) {
    this.setState({ email: evt.target.value, error: null });
  }

  handlePasswordInput(evt) {
    this.setState({ password: evt.target.value, error: null });
  }

  handleLogin(evt) {
    evt.preventDefault();
    this.props
      .login(this.state.email, this.state.password)
      .then(action => {
        if (action.payload && action.payload.err) {
          this.setState({ error: action.payload.err });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Debug</h1>
        {!this.props.isFetchingUser && <pre>{JSON.stringify(this.props.user, null, 2)}</pre>}
        {this.props.isFetchingUser && 'fetching user data...'}

        {!this.props.user && <div>
        <p>These login methods will not work if you are already logged in</p>
        <div><a href="/auth/facebook">Login with Facebook</a></div>
        <div><a href="/auth/google">Login with Google+</a></div>
        <form onSubmit={this.handleLogin}>
          <input type="text" name="email" placeholder="Email" onChange={this.handleEmailInput} />
          <input type="password" name="password" placeholder="password" onChange={this.handlePasswordInput} />
          <input type="submit" value="login" />
        </form>

        <hr />
        <h3>Signup here</h3>
        <form action="/auth/signup" method="post">
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>

        <hr />
        <h3>Error: {this.state.error || 'none'}</h3>
        </div>}

        {this.props.user && <div>
        <a href="#" onClick={this.handleLogout}>Logout (not work if not already logged in)</a>

        <hr />
        <a href="/auth/me">check my identity</a>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isFetchingUser: state.isFetchingUser,
  isLoggingIn: state.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
  login: (email, password) => {
    dispatch(loginUserStart());
    return dispatch(loginUserRequest(email, password));
  },
  logout: () => {
    dispatch(logoutUserStart());
    return dispatch(logoutUserRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthDemo);
