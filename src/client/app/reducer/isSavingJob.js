import {
  SAVE_JOB_START,
  SAVE_JOB_FAILURE,
  SAVE_JOB_SUCCESS,
} from '../action';

export default function isSavingJob(state = false, action) {
  switch (action.type) {
    case SAVE_JOB_START:
      return true;

    case SAVE_JOB_SUCCESS:
    case SAVE_JOB_FAILURE:
      return false;

    default:
      return state;
  }
}
