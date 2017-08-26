import {
  SIGNUP_USER_START,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
} from '../action';

export default function isSigningup(state = false, action) {
  switch (action.type) {
    case SIGNUP_USER_START:
      return true;

    case SIGNUP_USER_SUCCESS:
    case SIGNUP_USER_FAILURE:
      return false;

    default:
      return state;
  }
}
