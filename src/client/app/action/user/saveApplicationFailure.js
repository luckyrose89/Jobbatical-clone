export const SAVE_APPLICATION_FAILURE = 'SAVE_APPLICATION_FAILURE';

export function saveApplicationFailure(err) {
  return {
    type: SAVE_APPLICATION_FAILURE,
    payload: { err },
  }
}