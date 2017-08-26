import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import propTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import Loader from './Loader';
import styles from './JobDetails.scss';
import { fetchJobsIfNeeded } from '../../action';

export class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.links = [
      { hash: '#job-details-summary', title: 'Role Summary' },
      { hash: '#job-details-responsibilities', title: 'Responsibilities' },
      { hash: '#job-details-requirements', title: 'Requirements' },
      { hash: '#job-details-compensation', title: 'Compensation' },
      { hash: '#job-details-description', title: 'Job Description' },
    ];
    this.state = { activeHash: '' };
  }

  componentWillMount() {
    this.props.fetchData();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.sidenavEl) {
      return;
    } else if (!this.isAtTop() && !this.isAtBottom()) {
      this.sidenavEl.style.position = 'fixed';
      this.sidenavEl.style.top = '10vh';
    } else if (this.isAtTop()) {
      this.sidenavEl.style.position = 'absolute';
      this.sidenavEl.style.top = `${this.firstEl.offsetTop +
        this.firstEl.offsetHeight +
        0.1 * window.innerHeight}px`;
    } else {
      this.sidenavEl.style.position = 'absolute';
      this.sidenavEl.style.top = `${this.lastEl.offsetTop +
        this.lastEl.offsetParent.offsetTop +
        this.lastEl.offsetHeight -
        0.9 * window.innerHeight}px`;
    }

    let lastVisible = this.summaryEl;
    const els = [
      this.responsibilitiesEl,
      this.requirementsEl,
      this.compensationEl,
      this.descriptionEl,
    ];
    for (let i = 0; i < els.length; i++) {
      const clientRect = els[i].getBoundingClientRect();
      if (clientRect.top >= 0 &&
        clientRect.top < window.innerHeight &&
        clientRect.bottom > 0) {
        lastVisible = els[i];
        break;
      } else if (clientRect.top < window.innerHeight / 2) {
        lastVisible = els[i];
      } else {
        break;
      }
    }
    this.setState({ activeHash: `#${lastVisible.id}` });
  }

  isAtTop() {
    return this.firstEl && this.firstEl.getBoundingClientRect().bottom > 0;
  }

  isAtBottom() {
    return this.lastEl &&
      this.lastEl.getBoundingClientRect().bottom < window.innerHeight;
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
      const links = this.links.map(link => <li
        className={styles['sidenav-item']}
        key={link.hash}
      >
        <HashLink
          to={{ hash: link.hash }}
          className={styles['sidenav-link'] + ' ' +
            (this.state.activeHash === link.hash ?
              styles['sidenav-link--active'] :
              '')}
        >{link.title}</HashLink>
      </li>);
      const applyNow = (
        <div className={styles.apply}>
          <span className={styles.date}>
            Apply before <strong>{job.validThrough}</strong>
          </span>
          <div>
            <button className={'btn btn-default ' + styles['save-btn']}>
              Save for later
            </button>
            <button className={'btn btn-default ' + styles['apply-btn']}>
              APPLY NOW
            </button>
          </div>
        </div>
      );

      body = (
        <div className={styles.body}>
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${job.pictures[0]})` }}
            ref={el => this.firstEl = el }
          ></div>

          <ul className={styles.sidenav} ref={el => this.sidenavEl = el}>
            {links}
          </ul>

          <div className={styles.info}>
            <div
              className={styles.card}
              id="job-details-summary"
              ref={el => this.summaryEl = el}
            >
              <h3 className={styles.name}>{job.name}</h3>
              {applyNow}
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

            <div
              className={styles.card}
              id="job-details-responsibilities"
              ref={el => this.responsibilitiesEl = el}
            >
              <h5 className={styles.subheading}>Responsibilities</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.responsibilities}
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={styles.card}
              id="job-details-requirements"
              ref={el => this.requirementsEl = el}
            >
              <h5 className={styles.subheading}>Requirements</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.qualifications}
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={styles.card}
              id="job-details-compensation"
              ref={el => this.compensationEl = el}
            >
              <h5 className={styles.subheading}>Compensation</h5>
              <ul className={styles.list}>
                <li className={styles['list-item']}>
                  <span className={styles['list-text']}>
                    {job.incentiveCompensation}
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={styles.card}
              id="job-details-description"
              ref={el => this.descriptionEl = el}
            >
              <h5 className={styles.subheading}>Job description</h5>
              <p>{job.description}</p>
            </div>

            <div className={styles.card} ref={el => this.lastEl = el}>
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
              {applyNow}
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
