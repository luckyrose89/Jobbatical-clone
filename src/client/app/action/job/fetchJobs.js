import fetch from 'isomorphic-fetch'
import { requestJobs } from './requestJobs'
import { receiveJobs } from './receiveJobs'


//normalizr; incorporate following code
//import { normalize, denormalize, schema } from 'normalizr';
//const opening = new schema.Entity('openings');
//const mySchema = [ opening ]

export function fetchJobs(keyword) {
  return dispatch => {
    dispatch(requestJobs(keyword))
    console.log(keyword)
    let api = (keyword === 'All'||keyword === 'all') ? `/api/job`:`/api/job/keyword/${keyword}`
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