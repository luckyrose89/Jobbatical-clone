import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from './Loader';
import styles from './JobDetails.scss';
import { fetchJobsIfNeeded } from '../../action';

export class JobDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    if (!this.props.job && !this.props.isFetching) {
      return <Redirect to="/jobs" />
    }

    let body;
    if (!this.props.job && this.props.isFetching) {
      body = <Loader />;
    } else {
      const job = this.props.job;
      const keywords = job.category.keyword.map(word => <a
        href="#"
        key={word}
        className={styles.keyword}
      >{word}</a>);

      body = (
        <div className={styles.body}>
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${job.pictures[0]})` }}
          ></div>

          <div className={styles.info}>
            <div className={styles.card}>
              <h3 className={styles.name}>{job.name}</h3>
              <div className={styles.apply}>
                <span className={styles.date}>
                  Apply before <strong>{job.validThrough}</strong>
                </span>
                <button className={'btn btn-default ' + styles['save-btn']}>
                  Save for later
                </button>
                <button className={'btn btn-default ' + styles['apply-btn']}>
                  APPLY NOW
                </button>
              </div>
              <p className={styles.share}>Know someone who would be perfect for this job? Share the link: (put some links here)</p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.company}>
                {job.hiringOrganization.name}
              </h3>
              <h4 className={styles.address}>
                in {job.hiringOrganization.location.addressCity},&nbsp;
                {job.hiringOrganization.location.addressCountry}
              </h4>
            </div>

            <div className={styles.card}>
              {keywords}
            </div>

            <div className={styles.card}>
              <h5 className={styles.subheading}>Responsibilities</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.responsibilities}
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h5 className={styles.subheading}>Requirements</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.qualifications}
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h5 className={styles.subheading}>Compensation</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.incentiveCompensation}
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h5 className={styles.subheading}>Job description</h5>
              <p>{job.description}</p>
            </div>

            <div className={styles.card}>
              <h5 className={styles.subheading}>
                Get notified about similar jobs
              </h5>
              <p>Make sure you don&apos;t miss the best opportunities
                &mdash; sign up for our weekly notifications about new
                jobs. No spam, we promise.
              </p>
              <button className={'btn btn-default ' + styles['join-btn']}>
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className={styles.detail}>
          {body}
        </div>
        <Footer />
      </div>
    );
  }
}

JobDetails.propTypes = {
};

const mapStateToProps = (state, props) => {
  let job = null;
  let isFetching = true;
  if (state.jobReducer.jobsByKeyword.All) {
    job = state.jobReducer.jobsByKeyword.All.items
      .find(item => item._id === props.match.params.id);
    isFetching = state.jobReducer.jobsByKeyword.All.isFetching;
  }

  return {
    job,
    isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchJobsIfNeeded('All')),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
