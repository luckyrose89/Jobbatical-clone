export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export function signupUserFailure(err) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: { err },
  };
}
