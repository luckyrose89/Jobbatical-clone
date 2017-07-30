import { INC, DEC } from '../action';

const initialState = 42;

function num(state = initialState, action) {
  switch (action.type) {
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    default:
      return state;
  }
}

export default num;
