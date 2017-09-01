import fetch from 'isomorphic-fetch';
import { createNewJobSuccess } from './createNewJobSuccess';
import { createNewJobFailure } from './createNewJobFailure';

export const CREATE_NEW_JOB = 'CREATE_NEW_JOB';

export async function createNewJob(values) {
console.log('creating post request with', values);
  return fetch('/api/job', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }, null, 2),
  }).then(res => res.json())
    .then(json => {
      if (json.name) {
        return createNewJobSuccess(json);
      } else {
        return createNewJobFailure(json.error);
      }
    })
    .catch(err => createNewJobFailure(err))
    .then(
  window.alert(`You submitted:\n\n${JSON.stringify(values.name, null, 2)}`)
  )
};