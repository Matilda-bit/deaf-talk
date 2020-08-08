import axios from "axios";

import * as actionTypes from "./actionTypes";

export const register = (firstName, lastName) => {
  return {
    type: actionTypes.REGISTER,
    firstName: firstName,
    lastName: lastName,
  };
};
