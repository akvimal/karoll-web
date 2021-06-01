import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_GETCOURSEBYID_REQUEST,
  FETCH_GETCOURSEBYID_FAILURE,
  FETCH_GETCOURSEBYID_SUCCESS,
  DELETE_COURSEBYID_SUCCESS,
  DELETE_COURSEBYID_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_REQUEST,
} from "./courseType";

const initialState = {
  user: JSON.parse(localStorage.getItem("currentUser")),
  loading: true,
  courses: [],
  error: "",
  load: true,
  course: "",
  err: "",
  check: false,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return { ...state, loading: true };
    case FETCH_COURSES_SUCCESS:
      console.log(action);
      return { ...state, loading: false, courses: action.payload, error: "" };
    case FETCH_COURSES_FAILURE:
      return { ...state, loading: false, courses: [], error: action.payload };
    case FETCH_GETCOURSEBYID_REQUEST:
      return { ...state, load: true, course: "" };
    case FETCH_GETCOURSEBYID_SUCCESS:
      return { ...state, load: false, course: action.payload, err: "" };
    case FETCH_GETCOURSEBYID_FAILURE:
      return { ...state, load: false, course: [], err: action.payload };
    case DELETE_COURSEBYID_REQUEST:
      return { ...state, check: false };
    case DELETE_COURSEBYID_SUCCESS:
      return { ...state, check: true };
    case ADD_COURSE_REQUEST: {
      return { ...state, check: false };
    }
    case ADD_COURSE_SUCCESS:
      return { ...state, check: true };
    default:
      return state;
  }
};
export default courseReducer;
