export const CREATE_NEW_JOB_SUCCESS = 'CREATE_NEW_JOB_SUCCESS';

export function createNewJobSuccess(postJob) {
  return {
    type: CREATE_NEW_JOB_SUCCESS,
    payload: { postJob },
  };
}