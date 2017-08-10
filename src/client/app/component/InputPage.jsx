import React from 'react';
import { connect } from 'react-redux';

import styles from './InputPage.scss';

// This component serves as an example and a test for the build
// configurations
function Example({ onDec, onInc, num }) {
  return (
    <div>
      <h1 className={styles.example}>Hello, team bears-8!</h1>
      <p>Use the following form to test create new user/job</p>

      <form action='/api/job' method="post">
        <input className={styles.inputBox} type="text" name="name" placeholder=" job" /><br/>
        <input className={styles.inputBox} type="text" name="hiringOrganization.name" placeholder=" hiringOrganization.name" /><br/>
        <input className={styles.inputSub} type="text" name="hiringOrganization.location.addressCity" placeholder=" hiringOrganization.location.addressCity" />
        <input className={styles.inputSub} type="text" name="hiringOrganization.location.addressRegion" placeholder=" hiringOrganization.location.addressRegion" />
        <input className={styles.inputSub} type="text" name="hiringOrganization.location.addressCountry" placeholder=" hiringOrganization.location.addressCountry" /><br/>
        <input className={styles.inputBox} type="text" name="pictures" placeholder=" http://testjobpost.com"/><br/>
        <input className={styles.inputBox} type="text" name="description" placeholder=" description" /><br/>
        <input className={styles.inputBox} type="text" name="category.keyword" placeholder=" category.keyword" /><br/>
        <input className={styles.inputBox} type="text" name="category.region" placeholder=" region" /><br/>
        <input className={styles.inputBox} type="text" name="incentiveCompensation" placeholder=" incentiveCompensation" /><br/>
        <input className={styles.inputSub} type="text" name="jobLocation.addressCity" placeholder=" jobLocation.addressCity" />
        <input className={styles.inputSub} type="text" name="jobLocation.addressRegion" placeholder=" jobLocation.addressRegion" />
        <input className={styles.inputSub} type="text" name="jobLocation.addressCountry" placeholder=" jobLocation.addressCountry" /><br/>
        <input className={styles.inputBox} type="text" name="employmentType" placeholder=" job" /><br/>
        <input className={styles.inputBox} type="text" name="industry" placeholder=" industry" /><br/>
        <input className={styles.inputBox} type="text" name="responsibilities" placeholder=" responsibilities" /><br/>
        <input className={styles.inputBox} type="text" name="qualifications" placeholder=" qualifications" /><br/>
        <input className={styles.inputBox} className={styles.submit} type="submit" value="Create Job" />
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


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
export { Example };
