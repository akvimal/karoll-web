import { combineReducers } from "redux";
import courseReducer from "./course/courseReducer";
import stacktagReducer from "./stacktag/stacktagReducer";

const rootReducer = combineReducers({
  course: courseReducer,
  stack: stacktagReducer,
});
export default rootReducer;
