export const MORE_INFO_SUCCESS = 'MORE_INFO_SUCCESS';

export function moreInfoSuccess(info) {
  return {
    type: MORE_INFO_SUCCESS,
    payload: { info },
  };
}