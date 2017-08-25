export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';

export function signupUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: { user },
  };
}
