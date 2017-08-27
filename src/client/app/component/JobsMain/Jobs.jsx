import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectKeyword,
  fetchJobsIfNeeded,
  invalidateKeyword
} from '../../action'
import Picker from './Picker'
import JobLister from './JobLister'
import Inputbox from './Inputbox'
import Header from '../header';
import Footer from '../footer'


class Jobs extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedKeyword } = this.props
    dispatch(fetchJobsIfNeeded(selectedKeyword))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedKeyword !== prevProps.selectedKeyword) {
      const { dispatch, selectedKeyword } = this.props
      dispatch(fetchJobsIfNeeded(selectedKeyword))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectKeyword(nextSubreddit))
    this.props.dispatch(fetchJobsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedKeyword } = this.props
    dispatch(invalidateKeyword(selectedKeyword))
    dispatch(fetchJobsIfNeeded(selectedKeyword))
  }

  // <Picker
  //   value={selectedKeyword}
  //   onChange={this.handleChange}
  //   options={['All', 'Worker', 'Engineer','Tech']}
  // />
  render() {
    const { selectedKeyword, jobs, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Header />
        <Inputbox 
          value={selectedKeyword}
          onClick={this.handleChange}
          lastUpdated={lastUpdated}
          isFetching={isFetching}
          jobs={jobs}
        />
        <JobLister 
          jobs={jobs} 
          isFetching={isFetching}
        />
        <Footer />
      </div>
    )
  }
}

Jobs.propTypes = {
  selectedKeyword: PropTypes.string.isRequired,
  jobs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedKeyword, jobsByKeyword } = state.jobReducer
  const {
    isFetching,
    lastUpdated,
    items: jobs
  } = jobsByKeyword[selectedKeyword] || {
      isFetching: true,
      items: []
    }

  return {
    selectedKeyword,
    jobs,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Jobs)
export { Jobs };
