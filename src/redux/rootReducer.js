import { combineReducers } from "redux";
import courseReducer from "./course/courseReducer";
import stacktagReducer from "./stacktag/stacktagReducer";
import activityReducer from "./activity/activityReducer";
const rootReducer = combineReducers({
  course: courseReducer,
  stack: stacktagReducer,
  activity: activityReducer,
});
export default rootReducer;
