export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export function receiveJobs(keyword, json) {
  return {
    type: RECEIVE_JOBS,
    keyword,
    jobs: json,
    receivedAt: Date.now()
  }
}