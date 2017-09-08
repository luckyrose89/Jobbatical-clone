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
import styles from './AppliedJobs.scss';

class AppliedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentWillMount() {
  	console.log('this is:', this)
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

    const currentAppliedJobs = this.props.user ? this.props.user.data.applied : [];
    const ids = [];
    for (var i=0; i<currentAppliedJobs.length; i++) {
    	ids.push(Object.keys(this.props.user.data.applied[i])[0])
    }
    const jobs = ids
      .map((id) => this.props.jobs.find((job) => job._id === id))
      .filter((job) => !!job);

    return (
      <div>
        <Header />

        <div className={styles['applied-jobs']}>
          {jobs.length > 0 && <section className={styles['empty-message']}>
            <div className={styles['applied-title']}>
              <div>You are awesome!!</div>
              <div>You have applied for the following jobs!!</div>
            </div>
            {jobs.length > 0 && <JobLister 
              jobs={jobs} 
              isFetching={!this.props.user}
            />}
            <Link to="/jobs">Explore jobs here</Link>!
          </section>}

          {jobs.length === 0 && <section className={styles['empty-message']}>
            <div className={styles['applied-title']}>
              <div>You are almost there</div>
              <div>Apply for your first job now!!</div>
            </div>
            <Link to="/jobs">Explore jobs here</Link>!
          </section>}

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
});

export default connect(mapStateToProps, mapDispatchToProps)(AppliedJobs);
