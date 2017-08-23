import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styles from '../component/JobsDemo.scss';

export default class Jobs extends Component {
  render() {
    const { jobs, isFetching } = this.props
    const url = 'http://lorempixel.com/400/200/'
    return (
      <section className="job-listing-section">
        {jobs.length > 0 &&
    		<div className="list-group" style={{ opacity: isFetching ? 0.5 : 1 }}>
            {this.props.jobs.map((job,i) => 
              <div className='job-details' key={ job._id.toString() }>
                <a href={"/api/job/" + job._id }>
                  <img src={job.pictures} height='100' width='300'></img>
                  <h4 className='job-title'> <strong> {job.name} </strong></h4>
                  <p className='job-emptype'> <strong>Employment Type:</strong> {job.employmentType} </p>
                  <p className='job-title'> <strong>Description:</strong> {job.description} </p>
                </a>
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