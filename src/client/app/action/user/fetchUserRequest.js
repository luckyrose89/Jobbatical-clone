import fetch from 'isomorphic-fetch';

import { fetchUserSuccess } from './fetchUserSuccess';
import { fetchUserFailure } from './fetchUserFailure';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';

export function fetchUserRequest() {
  return fetch('/auth/me', { credentials: 'include' })
    .then(res => res.json())
    .then(json => {
      if (json.user) {
        return fetchUserSuccess(json.user);
      } else {
        return fetchUserFailure(json.error);
      }
    })
    .catch(err => fetchUserFailure(err));
}
