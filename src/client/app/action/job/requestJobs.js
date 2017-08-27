export const REQUEST_JOBS = 'REQUEST_JOBS'

export function requestJobs(keyword) {
  return {
    type: REQUEST_JOBS,
    keyword
  }
}