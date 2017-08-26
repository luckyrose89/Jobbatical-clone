export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export function logoutUserFailure(err) {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: { err },
  };
}
