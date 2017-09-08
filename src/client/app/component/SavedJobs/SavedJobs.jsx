import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
  fetchUserStart,
  fetchUserRequest,
  fetchJobsIfNeeded,
} from '../../action';
import Header from '../header';
import Footer from '../footer';
import JobLister from '../JobsMain/JobLister';
import styles from './SavedJobs.scss';
import { saveApplication } from '../../action';

class SavedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentWillMount() {
    this.props.fetchUser().then(() => this.setState({ fetching: false }));
    this.props.fetchData();
  }

  render() {
    if (
      !this.state.fetching &&
      !this.props.user &&
      !this.props.isFetchingUser
    ) {
      return <Redirect to="/" />
    }

    const ids = this.props.user ? this.props.user.data.saved : [];
    const jobs = ids
      .map((id) => this.props.jobs.find((job) => job._id === id))
      .filter((job) => !!job);

    return (
      <div>
        <Header />
        <div className={styles['saved-jobs']}>
          {jobs.length > 0 && <JobLister 
            jobs={jobs} 
            isFetching={!this.props.user}
          />}

          {jobs.length > 0 && <Link to="/job/apply/all-saved"><p className={styles['apply-all-saved-jobs']}>
          Apply to all saved job(s)!</p></Link>}

          {jobs.length === 0 && <p className={styles['empty-message']}>
            No saved jobs. <Link to="/jobs">Explore jobs here</Link>!
          </p>}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isFetchingUser: state.isFetchingUser,
  jobs: state.jobReducer.jobsByKeyword.All ?
    state.jobReducer.jobsByKeyword.All.items :
    [],
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchJobsIfNeeded('All')),
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
  saveData: (value) => dispatch(saveApplication(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobs);
