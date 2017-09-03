import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  SAVE_APPLICATION_SUCCESS,
  SAVE_APPLICATION_FAILURE,
  SAVE_JOB_SUCCESS,
} from '../action';

export default function user(state = null, action) {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
    case SAVE_JOB_SUCCESS:
      return action.payload.user;

    case SAVE_APPLICATION_SUCCESS:
      return action.payload.application;

    case SAVE_APPLICATION_FAILURE:
    case LOGOUT_USER_SUCCESS:
    case LOGIN_USER_FAILURE:
    case FETCH_USER_FAILURE:
      return null;

    default:
      return state;
  }
}
