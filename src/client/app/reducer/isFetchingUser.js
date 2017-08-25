import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_START,
} from '../action';

export default function isFetchingUser(state = false, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
    case FETCH_USER_FAILURE:
      return false;

    case FETCH_USER_START:
      return true;

    default:
      return state;
  }
}
