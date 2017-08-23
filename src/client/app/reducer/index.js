import { combineReducers } from 'redux';

import exampleReducer from './example';
import jobReducer from './jobReducers';

const rootReducer = combineReducers({
  num: exampleReducer,
  jobReducer
});

export default rootReducer;
