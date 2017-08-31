export const CREATE_NEW_JOB_FAILURE = 'CREATE_NEW_JOB_FAILURE';

export function createNewJobFailure(err) {
  return {
    type: CREATE_NEW_JOB_FAILURE,
    payload: { err },
  };
}