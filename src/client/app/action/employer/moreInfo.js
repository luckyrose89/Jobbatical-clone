import fetch from 'isomorphic-fetch';
import { moreInfoSuccess } from './moreInfoSuccess';
import { moreInfoFailure } from './moreInfoFailure';

export const MORE_INFO = 'MORE_INFO';

export async function moreInfo(values) {
console.log('creating more info request with', values);
  return fetch('/api/contact', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }, null, 2),
  }).then(res => res.json())
    .then(json => {
      if (json.email) {
        return moreInfoSuccess(json);
      } else {
        return moreInfoFailure(json.error);
      }
    })
    .catch(err => moreInfoFailure(err))
    .then(
  window.alert(`We have received your request:\n\n${JSON.stringify(values.email, null, 2)} for ${JSON.stringify(values.inquiry, null, 2)}`)
  )
};