import {
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_GETCOURSEBYID_FAILURE,
  FETCH_GETCOURSEBYID_SUCCESS,
  FETCH_GETCOURSEBYID_REQUEST,
  DELETE_COURSEBYID_SUCCESS,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
} from "./courseType";
import API from "../../config/api";
import Swal from "sweetalert2";

const fetchCoursesRequest = () => {
  return {
    type: FETCH_COURSES_REQUEST,
  };
};

const fetchCoursesSuccess = (course) => {
  console.log(course);
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: course,
  };
};

const fetchCoursesFailure = (error) => {
  console.log(error);
  return {
    type: FETCH_COURSES_FAILURE,
    payload: error,
  };
};

const fetchGetCourseByIdRequest = () => {
  return {
    type: FETCH_GETCOURSEBYID_REQUEST,
  };
};

const fetchGetCourseByIdSuccess = (course) => {
  return {
    type: FETCH_GETCOURSEBYID_SUCCESS,
    payload: course,
  };
};

const fetchGetCourseByIdFailure = (error) => {
  return {
    type: FETCH_GETCOURSEBYID_FAILURE,
    payload: error,
  };
};
const DeleteCourseByIdSuccess = () => {
  return {
    type: DELETE_COURSEBYID_SUCCESS,
  };
};
const AddCourseSuccess = () => {
  return {
    type: ADD_COURSE_SUCCESS,
  };
};

const AddCourseRequest = () => {
  return {
    type: ADD_COURSE_REQUEST,
  };
};

export const fetchCourses = () => {
  console.log("fetched");
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    API.get(`/api/course`)
      .then((res) => dispatch(fetchCoursesSuccess(res.data)))
      .catch((e) => dispatch(fetchCoursesFailure(e)));
  };
};
export const addCourses = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch(AddCourseRequest());
    API.post(`/api/course`, data)
      .then((res) => dispatch(AddCourseSuccess()))
      .catch((e) => console.log(e));
  };
};
export const getCoursesById = (id) => {
  return (dispatch) => {
    dispatch(fetchGetCourseByIdRequest());
    API.get(`/api/course/${id}`)
      .then((res) => dispatch(fetchGetCourseByIdSuccess(res.data)))
      .catch((e) => dispatch(fetchGetCourseByIdFailure(e)));
  };
};

export const deleteCourseById = (id) => {
  return (dispatch) => {
    dispatch(DeleteCourseByIdSuccess());
    API.delete(`/api/course/${id}`)
      .then((res) => {
        // dispatch(DeleteCourseByIdSuccess());
        Swal.fire("Congrats", `${res.data}`, "success");
      })
      .catch((e) => console.log(e));
  };
};
