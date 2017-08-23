import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Jobs extends Component {
  render() {
    const { jobs, isFetching } = this.props
    return (
      <section className="job-listing-section">
        {jobs.length > 0 &&
    		<div className="list-group" style={{ opacity: isFetching ? 0.5 : 1 }}>
            {this.props.jobs.map((job,i) => 
              <div className='job-details' key={ job._id.toString() }>
                <a href={"/api/job/" + job._id }>
                  <img className='job-picture' src={job.pictures} height='150' width='300'></img>
                  <h4 className='job-title'> <strong> {job.name} </strong></h4>
                  <p className='job-emptype'> {job.employmentType} at {job.jobLocation.addressCity}, {job.jobLocation.addressCountry}</p>
                  <p className='job-title'> {job.description} </p>
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