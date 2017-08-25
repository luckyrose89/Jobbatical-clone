export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export function fetchUserFailure(err) {
  return {
    type: FETCH_USER_FAILURE,
    payload: { err },
  };
}
