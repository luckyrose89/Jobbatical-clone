import fetch from 'isomorphic-fetch';

import { saveJobSuccess } from './saveJobSuccess';
import { saveJobFailure } from './saveJobFailure';

export function saveJobRequest(user, jobID) {
  if (user.data.saved.indexOf(jobID) > -1) {
    return saveJobSuccess(user);
  }

  const data = Object.assign({}, user, {
    data: {
      ...user.data,
      saved: user.data.saved.concat(jobID),
    },
  });

  return fetch('/api/user', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.confirmation && res.confirmation === 'fail') {
        throw res.message;
      } else {
        return res;
      }
    })
    .then((user) => saveJobSuccess(user))
    .catch((err) => saveJobFailure(err));
}
