import {
  LOGOUT_USER_START,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
} from '../action';

export default function isLoggingOut(state = false, action) {
  switch (action.type) {
    case LOGOUT_USER_START:
      return true;

    case LOGOUT_USER_SUCCESS:
    case LOGOUT_USER_FAILURE:
      return false;

    default:
      return state;
  }
}
