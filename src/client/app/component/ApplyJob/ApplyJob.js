import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from '../JobDetails/Loader';
import ApplicationForm from './ApplicationForm'
import styles from './ApplyJob.scss';
import { fetchJobsIfNeeded } from '../../action';
import { saveApplication } from '../../action';

export class ApplyJob extends React.Component {
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
    const job = this.props.job;
    const { fireRedirect } = this.state
    let card
    if (!this.props.job && this.props.isFetching) {
      card = <Loader />;
    } else {
      card = (
        <div className={ styles['job-card'] }>
          <img className={ styles['photo']} src={job.pictures} height='150' width='300'></img>
          <h3>{job.name}</h3>
          <h4><strong>{job.employmentType}</strong> at <strong>{job.jobLocation.addressCity}</strong>, <strong>{job.jobLocation.addressCountry}</strong></h4>
          <h4>{job.description}</h4>
          <h4>Responsibilities: {job.responsibilities}</h4>
        </div>
        )
    }
    return (
      <div>
      <Header />
      <section className={styles['job-application']}> 
        <div>
          { card }
        </div>
        <ApplicationForm onSubmit = { this.handleSubmit }/>
        {fireRedirect && (
          <Redirect to={'/job/apply/'+job._id+'/'+job.name+'/thankyou'} />
        )}
        <Footer />
      </section>
      </div>
    );
  }
}

ApplyJob.propTypes = {
};

const mapStateToProps = (state, props) => {
  let job = null;
  let isFetching = true;
  let currentUser = null;
  if (state.jobReducer.jobsByKeyword.All) {
    job = state.jobReducer.jobsByKeyword.All.items
      .find(item => item._id === props.match.params.id);
    isFetching = state.jobReducer.jobsByKeyword.All.isFetching;
    console.log('job: ',job.name)
    currentUser = state.user;
    console.log('currentUser: ',currentUser)
  }

  return {
    job,
    isFetching,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(fetchJobsIfNeeded('All')),
      saveData: (value) => dispatch(saveApplication(value)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJob);
