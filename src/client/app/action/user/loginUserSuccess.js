export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { user },
  };
}
