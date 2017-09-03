export { inc, dec, INC, DEC } from './example';
export {
  FETCH_USER_START,
  fetchUserStart,
  FETCH_USER_REQUEST,
  fetchUserRequest,
  FETCH_USER_SUCCESS,
  fetchUserSuccess,
  FETCH_USER_FAILURE,
  fetchUserFailure,

  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  loginUserStart,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,

  LOGOUT_USER_START,
  logoutUserStart,
  logoutUserRequest,
  LOGOUT_USER_SUCCESS,
  logoutUserSuccess,
  LOGOUT_USER_FAILURE,
  logoutUserFailure,

  SIGNUP_USER_START,
  signupUserStart,
  signupUserRequest,
  SIGNUP_USER_SUCCESS,
  signupUserSuccess,
  SIGNUP_USER_FAILURE,
  signupUserFailure,

  SAVE_APPLICATION_SUCCESS,
  saveApplicationSuccess,
  SAVE_APPLICATION_FAILURE,
  saveApplicationFailure,
  SAVE_APPLICATION,
  saveApplication,
} from './user';

export {
  SAVE_JOB_START,
  SAVE_JOB_FAILURE,
  SAVE_JOB_SUCCESS,
  saveJobStart,
  saveJobFailure,
  saveJobSuccess,
  saveJobRequest,
} from './save';

// actions for jobs page
export {
  REQUEST_JOBS, 
  requestJobs,
  RECEIVE_JOBS, 
  receiveJobs,
  SELECT_KEYWORD,
  selectKeyword,
  INVALIDATE_KEYWORD,
  invalidateKeyword,

  shouldfetchJobs,
  fetchJobs,
  fetchJobsIfNeeded,
} from './job';

// actions for employer page
export {
  CREATE_NEW_JOB,
  createNewJob,
  CREATE_NEW_JOB_SUCCESS,
  createNewJobSuccess,
  CREATE_NEW_JOB_FAILURE,
  createNewJobFailure,
  MORE_INFO,
  moreInfo,
  MORE_INFO_SUCCESS,
  moreInfoSuccess,
  MORE_INFO_FAILURE,
  moreInfoFailure,
} from './employer';
