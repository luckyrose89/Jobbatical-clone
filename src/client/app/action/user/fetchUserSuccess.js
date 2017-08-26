export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: { user },
  };
}
