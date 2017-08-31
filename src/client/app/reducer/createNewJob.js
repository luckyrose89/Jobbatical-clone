import { combineReducers } from 'redux';

import {
  CREATE_NEW_JOB,
  CREATE_NEW_JOB_SUCCESS,
  CREATE_NEW_JOB_FAILURE,
} from '../action';

function isPostingJob(state = false, action) {
  switch (action.type) {
    case CREATE_NEW_JOB_SUCCESS:
    case CREATE_NEW_JOB_FAILURE:
      return false;

    case CREATE_NEW_JOB:
      return true;

    default:
      return state;
  }
}

function postJob(state = {}, action) {
  switch (action.type) {
    case CREATE_NEW_JOB_SUCCESS:
      return Object.assign({}, state, {
         [action.payload.postJob.name]: action.payload.postJob
      });

    case CREATE_NEW_JOB_FAILURE:
      return null;

    default:
      return state;
  }
}

const createNewJob = combineReducers({
  isPostingJob,
  postJob
})

export default createNewJob