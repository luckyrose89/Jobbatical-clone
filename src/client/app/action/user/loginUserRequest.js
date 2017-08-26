import fetch from 'isomorphic-fetch';

import { loginUserSuccess } from './loginUserSuccess';
import { loginUserFailure } from './loginUserFailure';

export function loginUserRequest(email, password) {
console.log('loggingin', email, password);
  return fetch('/auth/local', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        return loginUserSuccess(data.user);
      } else {
        return loginUserFailure(data.error);
      }
    })
    .catch(err => loginUserFailure(err));
}
