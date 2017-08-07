import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { inc, dec } from '../action';
import styles from './Example.scss';
import testImg from '../../../../assets/favicon.svg';

// This component serves as an example and a test for the build
// configurations
function Example({ onDec, onInc, num }) {
  return (
    <div>
      <img src={testImg} />
      <h1 className={styles.example}>Hello, team bears-8!</h1>
      <p>Try to edit these files and the page should update without reloading</p>
      <ul>
        <li>/src/client/app/component/Example.jsx</li>
        <li>/src/client/app/component/Example.scss</li>
        <li>/src/client/app/reducer/example.js</li>
      </ul>
      <button className={styles.button} onClick={onDec}>-</button>
      <span>{num}</span>
      <button className={styles.button} onClick={onInc}>+</button>
      <a href="/api/v1/example">Example API route</a>
      <br/>
      <p>Use the following form to test create new user/job/category</p>
      <form action='/api/user' method="post">
        <input type="text" name="profile.username" placeholder="username" /><br/>
        <input type="text" name="profile.picture" placeholder="http://google.com" /><br/>
        <input type="text" name="data.oauth" value="dummyoauth" />
        <input type="submit" value="Create User" />
      </form>
      <br/>
      <form action='/api/job' method="post">
        <input type="text" name="job.name" placeholder="job" /><br/>
        <input type="text" name="job.pictures" placeholder="http://testjobpost.com" /><br/>
        <input type="text" name="job.description" placeholder="description" /><br/>
        <input type="text" name="job.category" placeholder="category (designer...)" />
        <input type="submit" value="Create Job" />
      </form>
      <br/>
      <form action='/api/category' method="post">
        <input type="text" name="category.region" placeholder="region" /><br/>
        <input type="text" name="category.keyword" value="dummyoauth" />
        <input type="submit" value="Create Category" />
      </form>
      <p>Use the following api to see data in database</p>
      <ul>
        <li>/api/user</li>
        <li>/api/job</li>
        <li>/api/category</li>
      </ul>
    </div>
  );
}

Example.propTypes = {
  onDec: PropTypes.func.isRequired,
  onInc: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    num: state.num,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInc: () => dispatch(inc()),
    onDec: () => dispatch(dec()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
export { Example };
