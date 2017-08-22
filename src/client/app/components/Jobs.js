import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Jobs extends Component {
  render() {
    return (
      // <ul>
      //   {this.props.jobs.map((job, i) => <li key={i} className={i}>{job.name}</li>)}
      // </ul>
		<ul className="list-group">
        {this.props.jobs.map((job,i) => 
          <div className={i} key={ job._id.toString() }>
            <a href={"/api/job/" + job._id }>
              <h4> {job.name} </h4>
              <p> Employment Type: {job.employmentType} </p>
              <p> Description: {job.description} </p>
            </a>
          </div>
        )}
      </ul>
    )
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
}