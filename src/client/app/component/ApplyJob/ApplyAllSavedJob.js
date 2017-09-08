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
import { saveApplication } from '../../action';
import FontAwesome from 'react-fontawesome';

export class ApplyAllSavedJob extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      fireRedirect: false
    }
  }

  componentWillMount() {
    this.props.fetchData();
  }

  componentWillUnmount() {
  }

  handleSubmit(values) {
    const user = this.props.user;
    const saveData = this.props.saveData;

    const ids = this.props.user ? this.props.user.data.saved : [];
    const jobs = ids
      .map((id) => this.props.jobs.find((job) => job._id === id))
      .filter((job) => !!job);

    jobs.forEach(function(job){
      var application = Object.assign({},values,{'jobTitle':job.name})
      var newValue = {
        input: {
          [job._id]:{application},
        },
        "user": [user._id],
      }
      saveData(newValue)
    });

    this.setState({ fireRedirect: true })
  }

  render() {
    console.log('this is', this)
    const { fireRedirect } = this.state
    const ids = this.props.user ? this.props.user.data.saved : [];
    const jobs = ids
      .map((id) => this.props.jobs.find((job) => job._id === id))
      .filter((job) => !!job);

    console.log(jobs)

    const summary = jobs.map(job => <div
      className={styles['job-to-apply']}
      key={job._id}>
                <FontAwesome
                    className='job-check-mark'
                    name='arrow-circle-right'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#27513d'}}
                />
                <span className={styles['job-title']}>{job.name}</span>
      </div>);

    return (
      <div>
      <Header />
      <section className={styles['job-application']}> 
        <div className={styles['all-job']}>
          <div className={styles['all-job-title']}>You can applied for all of the following openings with just ONE click!</div>
          <div className={styles['all-job-list']}>
            { summary }
          </div>
        </div>
        <ApplicationForm onSubmit = { this.handleSubmit }/>
        {fireRedirect && (
          <Redirect to={'/job/apply/all-saved/thankyou'} />
        )}
        <Footer />
      </section>
      </div>
    );
  }
}

ApplyAllSavedJob.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplyAllSavedJob);
