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
      <br/>
      <p>Use the following path to create new user/job</p>
      <ul>
        <li><a href="/input">/input</a></li>
      </ul>
      <p>Use the following API route to see data in database</p>
      <ul>
        <li><a href="/api/user">/api/user</a></li>
        <li><a href="/api/job">/api/job</a></li>
        <li><a href="/api/category">/api/category</a></li>
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
