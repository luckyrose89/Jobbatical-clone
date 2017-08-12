import React from 'react';

const AuthDemo = () => (
  <div>
    <p>These login methods will not work if you are already logged in</p>
    <div><a href="/auth/facebook">Login with Facebook</a></div>
    <div><a href="/auth/google">Login with Google+</a></div>
    <form action="/auth/local" method="post">
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
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
    <a href="/auth/logout">Logout (not work if not already logged in)</a>

    <hr />
    <a href="/auth/me">check my identity</a>
  </div>
);

export default AuthDemo;