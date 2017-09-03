import { combineReducers } from 'redux';

import exampleReducer from './example';
import jobReducer from './jobReducers';
import user from './user';
import isFetchingUser from './isFetchingUser';
import isLoggingIn from './isLoggingIn';
import isLoggingOut from './isLoggingOut';
import isSigningup from './isSigningup';
import isSavingJob from './isSavingJob';
import createNewJob from './createNewJob';
import empMoreInfo from './empMoreInfo';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  num: exampleReducer,
  jobReducer,
  user,
  createNewJob,
  empMoreInfo,
  isFetchingUser,
  isLoggingIn,
  isLoggingOut,
  isSigningup,
  isSavingJob,
  form: reduxFormReducer,
});

export default rootReducer;
