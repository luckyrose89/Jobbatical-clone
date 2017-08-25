import {
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from '../action';

export default function isLoggingIn(state = false, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return true;

    case LOGIN_USER_SUCCESS:
    case LOGIN_USER_FAILURE:
      return false;

    default:
      return state;
  }
}
