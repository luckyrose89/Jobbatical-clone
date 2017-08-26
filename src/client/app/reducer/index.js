import { combineReducers } from 'redux';

import exampleReducer from './example';
import jobReducer from './jobReducers';
import user from './user';
import isFetchingUser from './isFetchingUser';
import isLoggingIn from './isLoggingIn';
import isLoggingOut from './isLoggingOut';
import isSigningup from './isSigningup';

const rootReducer = combineReducers({
  num: exampleReducer,
  jobReducer,
  user,
  isFetchingUser,
  isLoggingIn,
  isLoggingOut,
  isSigningup,
});

export default rootReducer;
