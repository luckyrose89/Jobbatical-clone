import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
} from '../action';

export default function user(state = null, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
      return action.payload.user;

    case LOGOUT_USER_SUCCESS:
    case LOGIN_USER_FAILURE:
    case FETCH_USER_FAILURE:
      return null;

    default:
      return state;
  }
}
