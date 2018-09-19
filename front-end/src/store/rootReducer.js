import { combineReducers } from "redux";

import calendar from "./Calendar/reducer.js";
import day from "./Day/reducer.js";
import employee from "./Employee/reducer.js";
import employer from "./Employer/reducer.js";
import hourOfOperation from "./hourOfOperation/reducer.js";
import requestOff from "./requestOff/reducer.js";
import shift from "./Shift/reducer.js";
import user from "./User/reducer.js";

export const rootReducer = combineReducers({
  calendar,
  day,
  employee,
  employer,
  hourOfOperation,
  requestOff,
  shift,
  user,
});
