export { inc, dec, INC, DEC } from './example';
export {
  FETCH_USER_START,
  fetchUserStart,
  FETCH_USER_REQUEST,
  fetchUserRequest,
  FETCH_USER_SUCCESS,
  fetchUserSuccess,
  FETCH_USER_FAILURE,
  fetchUserFailure,
} from './user';

// actions for jobs page
import fetch from 'isomorphic-fetch'

export const REQUEST_JOBS = 'REQUEST_JOBS'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const SELECT_KEYWORD = 'SELECT_KEYWORD'
export const INVALIDATE_KEYWORD = 'INVALIDATE_KEYWORD'

export function selectKeyword(keyword) {
  return {
    type: SELECT_KEYWORD,
    keyword
  }
}

export function invalidateKeyword(keyword) {
  return {
    type: INVALIDATE_KEYWORD,
    keyword
  }
}

function requestJobs(keyword) {
  return {
    type: REQUEST_JOBS,
    keyword
  }
}

function receiveJobs(keyword, json) {
  return {
    type: RECEIVE_JOBS,
    keyword,
    jobs: json,
    receivedAt: Date.now()
  }
}

//normalizr; incorporate following code
//import { normalize, denormalize, schema } from 'normalizr';
//const opening = new schema.Entity('openings');
//const mySchema = [ opening ]

function fetchJobs(keyword) {
  return dispatch => {
    dispatch(requestJobs(keyword))
    console.log(keyword)
    let api = (keyword === 'All'||keyword === 'all') ? `http://localhost:3000/api/job`:`http://localhost:3000/api/job/keyword/${keyword}`
    return fetch(api)
      .then(response => response.json()
        .then(data => ({
        data: data,
        status: response.status,
        })
        )
      )
      .then(res => {
        console.log('Status: ',res.status, 'JSON: ',res.data)
        // const normalizedData = normalize(res.data, mySchema);
        // dispatch(receiveJobs(keyword, normalizedData));
        // const denormalizedData = denormalize( res.result, mySchema, res.entities);
        dispatch(receiveJobs(keyword, res.data))
        })
      .catch(error => {
      return error;
      console.log('api error')
    })
  }
}

function shouldfetchJobs(state, keyword) {
  const jobs = state.jobReducer.jobsByKeyword[keyword]
  if (!jobs) {
    return true
  } else if (jobs.isFetching) {
    return false
  } else {
    return jobs.didInvalidate
  }
}

export function fetchJobsIfNeeded(keyword) {
  return (dispatch, getState) => {
    if (shouldfetchJobs(getState(), keyword)) {
      return dispatch(fetchJobs(keyword))
    }
  }
}
