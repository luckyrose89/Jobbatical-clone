export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export function loginUserFailure(err) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: { err },
  };
}
