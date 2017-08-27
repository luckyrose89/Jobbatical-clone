import { shouldfetchJobs } from './shouldfetchJobs'
import { fetchJobs } from './fetchJobs'


export function fetchJobsIfNeeded(keyword) {
  return (dispatch, getState) => {
    if (shouldfetchJobs(getState(), keyword)) {
      return dispatch(fetchJobs(keyword))
    }
  }
}