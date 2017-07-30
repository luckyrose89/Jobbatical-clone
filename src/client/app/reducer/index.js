import { combineReducers } from 'redux';

import exampleReducer from './example';

const rootReducer = combineReducers({
  num: exampleReducer,
});

export default rootReducer;
