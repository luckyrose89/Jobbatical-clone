import fetch from 'isomorphic-fetch';

import { logoutUserSuccess } from './logoutUserSuccess';
import { logoutUserFailure } from './logoutUserFailure';

export function logoutUserRequest() {
  return fetch('/auth/logout', { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      if (!data.error) {
        return logoutUserSuccess();
      } else {
        return logoutUserFailure(data.error);
      }
    })
    .catch(err => logoutUserFailure(err));
}
