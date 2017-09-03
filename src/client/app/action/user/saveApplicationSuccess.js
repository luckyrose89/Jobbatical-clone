export const SAVE_APPLICATION_SUCCESS = 'SAVE_APPLICATION_SUCCESS';

export function saveApplicationSuccess(application) {
  return {
    type: SAVE_APPLICATION_SUCCESS,
    payload: { application },
  };
}