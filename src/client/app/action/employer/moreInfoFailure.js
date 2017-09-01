export const MORE_INFO_FAILURE = 'MORE_INFO_FAILURE';

export function moreInfoFailure(info) {
  return {
    type: MORE_INFO_FAILURE,
    payload: { info },
  };
}