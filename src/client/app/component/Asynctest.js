import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectKeyword,
  fetchJobsIfNeeded,
  invalidateKeyword
} from '../action'
import Picker from '../components/Picker'
import Jobs from '../components/Jobs'
import Inputbox from '../components/Inputbox'


class AsyncApp extends Component {
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

  render() {
    const { selectedKeyword, jobs, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker
          value={selectedKeyword}
          onChange={this.handleChange}
          options={['All', 'Worker', 'Engineer','Tech']}
        />
        <Inputbox 
          value={selectedKeyword}
          onClick={this.handleChange}
          options={['All', 'Worker', 'Engineer','Tech']}

        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
          {!isFetching &&
            <a href="#" onClick={this.handleRefreshClick}>
              Refresh
            </a>}
        </p>
        {isFetching && jobs.length === 0 && <h2>Loading...</h2>}
        {!isFetching && jobs.length === 0 && <h4>Try different keyword.</h4>}
        {jobs.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Jobs jobs={jobs} />
          </div>}
      </div>
    )
  }
}

AsyncApp.propTypes = {
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

export default connect(mapStateToProps)(AsyncApp)
export { AsyncApp };
