import { combineReducers } from 'redux';
import {
  SELECT_KEYWORD,
  INVALIDATE_KEYWORD,
  REQUEST_JOBS,
  RECEIVE_JOBS
} from '../action'

function selectedKeyword(state = 'All', action) {
  switch (action.type) {
    case SELECT_KEYWORD:
      return action.keyword
    default:
      return state
  }
}

function jobs(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_KEYWORD:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_JOBS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_JOBS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.jobs,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function jobsByKeyword(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_KEYWORD:
    case RECEIVE_JOBS:
    case REQUEST_JOBS:
      return Object.assign({}, state, {
        [action.keyword]: jobs(state[action.keyword], action)
      })
    default:
      return state
  }
}

const jobReducer = combineReducers({
  jobsByKeyword,
  selectedKeyword
})

export default jobReducer