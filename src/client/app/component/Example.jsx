import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <Link to="/jobs-demo">See basic Job page here !!</Link><br/>
      <Link to="/auth-demo">Test authentication here !!</Link><br/>
      <Link to="/input">Create new job posting here !!</Link><br/>
      <a href="/api/user">View all user api: /api/user</a><br/>
      <a href="/api/job">View all job api: /api/user</a><br/>
      <a href="/api/category">View all category api: /api/user</a><br/>
      
      <p>Try to edit these files and the page should update without reloading</p>
      <ul>
        <li>/src/client/app/component/Example.jsx</li>
        <li>/src/client/app/component/Example.scss</li>
        <li>/src/client/app/reducer/example.js</li>
      </ul>
      
      <button className={styles.button} onClick={onDec}>-</button>
      <span>{num}</span>
      <button className={styles.button} onClick={onInc}>+</button>
      <br/>
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
