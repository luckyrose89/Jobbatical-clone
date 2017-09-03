export const SAVE_JOB_SUCCESS = 'SAVE_JOB_SUCCESS';

export function saveJobSuccess(user) {
  return {
    type: SAVE_JOB_SUCCESS,
    payload: { user },
  };
}
