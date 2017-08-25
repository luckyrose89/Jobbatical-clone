import fetch from 'isomorphic-fetch';

import { signupUserSuccess } from './signupUserSuccess';
import { signupUserFailure } from './signupUserFailure';

export function signupUserRequest(email, password) {
  return fetch('/auth/signup', {
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
        return signupUserSuccess(data.user);
      } else {
        return signupUserFailure(data.error);
      }
    })
    .catch(err => signupUserFailure(err));
}
