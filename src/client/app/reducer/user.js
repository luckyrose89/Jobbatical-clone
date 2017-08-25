import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../action';

export default function user(state = null, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload.user;

    case FETCH_USER_FAILURE:
      return null;

    default:
      return state;
  }
}
