export function shouldfetchJobs(state, keyword) {
  const jobs = state.jobReducer.jobsByKeyword[keyword]
  if (!jobs) {
    return true
  } else if (jobs.isFetching) {
    return false
  } else {
    return jobs.didInvalidate
  }
}