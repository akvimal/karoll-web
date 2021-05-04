import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_GETCOURSEBYID_REQUEST,
  FETCH_GETCOURSEBYID_FAILURE,
  FETCH_GETCOURSEBYID_SUCCESS,
} from "./courseType";

const initialState = {
  loading: true,
  courses: [],
  error: "",
  load: true,
  course: "",
  err: "",
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
    default:
      return state;
  }
};
export default courseReducer;
