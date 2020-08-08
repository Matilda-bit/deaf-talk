import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  firstName: null,
  lastName: null,
  levelNum: null,
  levelAlefBet: null,
  level: null,
  email: null,
};
const register = (state, action) => {
  return updateObject(state, {
    firstName: action.firstName,
    lastName: action.lastName,
    levelNum: null,
    levelAlefBet: null,
    level: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      return register(state, action);

    default:
      return state;
  }
};

export default reducer;
