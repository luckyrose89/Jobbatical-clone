import fetch from 'isomorphic-fetch';
import { saveApplicationSuccess } from './saveApplicationSuccess';
import { saveApplicationFailure } from './saveApplicationFailure';

export const SAVE_APPLICATION = 'SAVE_APPLICATION';

export async function saveApplication(values) {
console.log('creating post request with', values);
  return fetch('/api/user/apply', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }, null, 2),
  }).then(res => res.json())
    .then(json => {
      if (json.data.applied) {
        return saveApplicationSuccess(json);
      } else {
        return saveApplicationFailure(json.error);
      }
      console.log('this json: ',  json)
    }
    )
    .catch(err => saveApplicationFailure(err))
    .then(
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  )
};