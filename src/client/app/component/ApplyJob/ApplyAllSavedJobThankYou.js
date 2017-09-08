import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from '../JobDetails/Loader';
import ApplicationForm from './ApplicationForm'
import styles from './ApplyAllSavedJob.scss';
import { fetchJobsIfNeeded } from '../../action';
import FontAwesome from 'react-fontawesome';

export class ApplyAllSavedJobThankYou extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchData();
  }

  componentWillUnmount() {
  }

  handleSubmit(values) {
    const job = this.props.job;
    const currentUser = this.props.currentUser;
    const { dispatch } = this.props
    console.log(this)
    var application = Object.assign({},values,{'jobTitle':job.name})
    var newValue = {
      input: {
        [job._id]:{application},
      },
      "user": [currentUser._id],
    }
    this.props.saveData(newValue)
    this.setState({ fireRedirect: true })
  }

  render() {
    console.log('this is', this)
    const ids = this.props.user ? this.props.user.data.saved : [];
    const jobs = ids
      .map((id) => this.props.jobs.find((job) => job._id === id))
      .filter((job) => !!job);

    const summary = jobs.map(job => <div
      className={styles['job-to-apply']}
      key={job._id}>
                <FontAwesome
                    className='job-check-mark'
                    name='check-circle'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#0ec96e'}}
                />
                <span className={styles['job-title']}>{job.name}</span>
      </div>);

    // !!no logic build in to check validity !!
    return (
      <div>
      <Header />
      <section className={styles['job-application']}> 
        <div>You have applied for the following openings!</div>
        <div className={styles['all-job-list']}>
          { summary }
        </div>
        <Footer />
      </section>
      </div>
    );
  }
}

ApplyAllSavedJobThankYou.propTypes = {
};

const mapStateToProps = state => ({
  user: state.user,
  isFetchingUser: state.isFetchingUser,
  jobs: state.jobReducer.jobsByKeyword.All ?
    state.jobReducer.jobsByKeyword.All.items :
    [],
});


const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchJobsIfNeeded('All')),
      saveData: (value) => dispatch(saveApplication(value)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyAllSavedJobThankYou);
