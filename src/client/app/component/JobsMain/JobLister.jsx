import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import styles from './JobLister.scss';

export default class Jobs extends Component {
  render() {
    const { jobs, isFetching } = this.props
    return (
      <section className={ styles['job-listing-section'] }>
        {jobs.length > 0 &&
    		<div className={ styles['list-group'] } style={{ opacity: isFetching ? 0.5 : 1 }}>
            {this.props.jobs.map((job,i) => 
              <div className={ styles['job-details']} key={ job._id.toString() }>
                <Link to={"/job/" + job._id }>
                  <img className={ styles['job-picture']} src={job.pictures} height='150' width='300'></img>
                  <h4 className={ styles['job-title']}> <strong> {job.name} </strong></h4>
                  <p className={ styles['job-emptype']}> {job.employmentType} at {job.jobLocation.addressCity}, {job.jobLocation.addressCountry}</p>
                  <p className={ styles['job-title']}> {job.description} </p>
                </Link>
              </div>
            )}
        </div>}
      </section>
    )
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
}
