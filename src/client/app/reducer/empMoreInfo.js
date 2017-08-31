import { combineReducers } from 'redux';

import {
  MORE_INFO,
  MORE_INFO_SUCCESS,
  MORE_INFO_FAILURE,
} from '../action';

function isRequestingMoreInfo(state = false, action) {
  switch (action.type) {
    case MORE_INFO_SUCCESS:
    case MORE_INFO_FAILURE:
      return false;

    case MORE_INFO:
      return true;

    default:
      return state;
  }
}

function requestMoreInfo(state = {}, action) {
  switch (action.type) {
    case MORE_INFO_SUCCESS:
      return Object.assign({}, state, {
         [action.payload.info.email]: action.payload.postJob
      });

    case MORE_INFO_FAILURE:
      return null;

    default:
      return state;
  }
}

const empMoreInfo = combineReducers({
  isRequestingMoreInfo,
  requestMoreInfo
})

export default empMoreInfo