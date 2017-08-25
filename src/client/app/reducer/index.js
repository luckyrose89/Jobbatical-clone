import { combineReducers } from 'redux';

import exampleReducer from './example';
import jobReducer from './jobReducers';
import user from './user';
import isFetchingUser from './isFetchingUser';

const rootReducer = combineReducers({
  num: exampleReducer,
  jobReducer,
  user,
  isFetchingUser,
});

export default rootReducer;
