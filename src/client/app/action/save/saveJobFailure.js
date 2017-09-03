export const SAVE_JOB_FAILURE = 'SAVE_JOB_FAILURE';

export function saveJobFailure(err) {
  return {
    type: SAVE_JOB_FAILURE,
    payload: { err },
  };
}
