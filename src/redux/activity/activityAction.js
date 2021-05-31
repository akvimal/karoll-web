import {
  FETCH_ACTIVITY_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_REQUEST,
  ADD_ACTIVITY_REQUEST,
  ACTIVITYIDBY_SUCCESS,
  DELETE_ACTIVITY_REQUEST,
  FETCH_LEARN_ACTIVITY_SUCCESS,
  FETCH_EXERCISE_ACTIVITY_SUCCESS,
  FETCH_EXERCISE_ACTIVITY_REQUEST,
  ADD_EXERCISE_ACTIVITY_REQUEST,
  ADD_EXERCISE_ACTIVITY_SUCCESS,
  ADD_LEARN_ACTIVITY_FAILURE,
  ADD_LEARN_ACTIVITY_REQUEST,
  ADD_LEARN_ACTIVITY_SUCCESS,
  ADD_QUIZ_ACTIVITY_REQUEST,
  ADD_QUIZ_ACTIVITY_SUCCESS,
  FETCH_QUIZ_ACTIVITY_SUCCESS,
  FETCH_ATTEMPT_QUIZSCORE_ACTIVITY_SUCCESS,
  DELETE_QUIZ_ACTIVITY_SUCCESS,
  DELETE_QUIZ_ACTIVITY_REQUEST,
} from "./activityType";

import API from "../../config/api";
import { getCoursesById } from "../course/courseAction";

const deleteQuizActivityRequest = () => {
  return {
    type: DELETE_QUIZ_ACTIVITY_REQUEST,
  };
};

const deleteQuizActivitySuccess = () => {
  return {
    type: DELETE_QUIZ_ACTIVITY_SUCCESS,
  };
};

const fetchAttemptQuizScoreActivitySuccess = (data) => {
  return {
    type: FETCH_ATTEMPT_QUIZSCORE_ACTIVITY_SUCCESS,
    payload: data,
  };
};

const addQuizActivitySuccess = () => {
  return {
    type: ADD_QUIZ_ACTIVITY_SUCCESS,
  };
};
const addQuizActivityRequest = () => {
  return {
    type: ADD_QUIZ_ACTIVITY_REQUEST,
  };
};
const fetchQuizActivitySuccess = (data) => {
  return {
    type: FETCH_QUIZ_ACTIVITY_SUCCESS,
    payload: data,
  };
};
const addLearnActivitySuccess = () => {
  return {
    type: ADD_LEARN_ACTIVITY_SUCCESS,
  };
};
const addLearnActivityRequest = () => {
  return {
    type: ADD_LEARN_ACTIVITY_REQUEST,
  };
};

const fetchLearnActivitySuccess = (data) => {
  return {
    type: FETCH_LEARN_ACTIVITY_SUCCESS,
    payload: data,
  };
};

const addExerciseActivitySuccess = () => {
  return {
    type: ADD_EXERCISE_ACTIVITY_SUCCESS,
  };
};
const addExerciseActivityRequest = () => {
  return {
    type: ADD_EXERCISE_ACTIVITY_REQUEST,
  };
};

const fetchExerciseActivitySuccess = (data) => {
  return {
    type: FETCH_EXERCISE_ACTIVITY_SUCCESS,
    payload: data,
  };
};
const fetchActivityRequest = () => {
  return {
    type: FETCH_ACTIVITY_REQUEST,
  };
};

const fetchActivitySuccess = (activity) => {
  return {
    type: FETCH_ACTIVITY_SUCCESS,
    payload: activity,
  };
};

const fetchActivityFailure = (error) => {
  return {
    type: FETCH_ACTIVITY_FAILURE,
    payload: error,
  };
};
const AddActivityRequest = () => {
  return {
    type: ADD_ACTIVITY_REQUEST,
  };
};

const DeleteActivityRequest = () => {
  return {
    type: DELETE_ACTIVITY_REQUEST,
  };
};

const fetchActivityByIdSuccess = (data) => {
  return {
    type: ACTIVITYIDBY_SUCCESS,
    payload: data,
  };
};

export const fetchActivity = () => {
  console.log("fetched");
  return (dispatch) => {
    dispatch(fetchActivityRequest());
    API.get(`/api/tags`)
      .then((res) => dispatch(fetchActivitySuccess(res.data)))
      .catch((e) => dispatch(fetchActivityFailure(e)));
  };
};
export const getByIdActivity = (id) => {
  return (dispatch) => {
    API.get(`/api/activity/${id}`)
      .then((res) => dispatch(fetchActivityByIdSuccess(res.data)))
      .catch((e) => console.log(e));
  };
};

export const addActivity = (data) => {
  return (dispatch) => {
    dispatch(AddActivityRequest());
    API.post(`/api/activity`, data)
      .then((res) => dispatch(getCoursesById(data.courseId)))
      .catch((e) => console.log(e));
  };
};

export const deleteActivity = (id, courseId) => {
  return (dispatch) => {
    dispatch(DeleteActivityRequest());
    API.delete(`/api/activity/${id}`)
      .then((res) => dispatch(getCoursesById(courseId)))
      .catch((e) => console.log(e));
  };
};
export const updateActivity = (id, courseId, data) => {
  return (dispatch) => {
    dispatch(DeleteActivityRequest());
    API.post(`/api/activity/${id}`, data)
      .then((res) => dispatch(getCoursesById(courseId)))
      .catch((e) => console.log(e));
  };
};
export const updateOrderActivity = (courseId, data) => {
  return (dispatch) => {
    // dispatch(DeleteActivityRequest());
    API.put(`/api/activity`, data)
      .then((res) => console.log("updated"))
      .catch((e) => console.log(e));
  };
};

export const addLearnActivity = (data, id) => {
  return (dispatch) => {
    dispatch(addLearnActivityRequest());
    API.post(`/api/learn`, data)
      .then((res) => dispatch(addLearnActivitySuccess()))
      .catch((e) => console.log(e));
  };
};
export const fetchLearnActivity = (id) => {
  return (dispatch) => {
    API.get(`/api/learn/${id}`)
      .then((res) => dispatch(fetchLearnActivitySuccess(res.data)))
      .catch((e) => console.log(e));
  };
};

export const addExerciseActivity = (data, id) => {
  return (dispatch) => {
    dispatch(addExerciseActivityRequest());
    API.post(`/api/exercise`, data)
      .then((res) => dispatch(addExerciseActivitySuccess()))
      .catch((e) => console.log(e));
  };
};
export const fetchExerciseActivity = (id) => {
  return (dispatch) => {
    API.get(`/api/exercise/${id}`)
      .then((res) => dispatch(fetchExerciseActivitySuccess(res.data)))
      .catch((e) => console.log(e));
  };
};
export const addQuizActivity = (data) => {
  return (dispatch) => {
    dispatch(addQuizActivityRequest());
    API.post(`/api/quiz`, data)
      .then((res) => dispatch(addQuizActivitySuccess()))
      .catch((e) => console.log(e));
  };
};
export const fetchQuizActivity = (id) => {
  return (dispatch) => {
    API.get(`/api/quiz/${id}`)
      .then((res) => dispatch(fetchQuizActivitySuccess(res.data)))
      .catch((e) => console.log(e));
  };
};
export const attemptQuizActivity = (data) => {
  return (dispatch) => {
    // dispatch(addQuizctivityRequest());
    API.post(`/api/quiz/attempt/${data.UserId}`, data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };
};

export const getAttemptQuizScoreActivity = (id) => {
  return (dispatch) => {
    // dispatch(addQuizctivityRequest());
    API.get(`/api/quiz/attempt/${id}`)
      .then((res) => dispatch(fetchAttemptQuizScoreActivitySuccess(res.data)))
      .catch((e) => console.log(e));
  };
};

export const deleteQuizActivity = (id) => {
  return (dispatch) => {
    dispatch(deleteQuizActivityRequest());
    API.delete(`/api/quiz/${id}`)
      .then((res) => dispatch(deleteQuizActivitySuccess()))
      .catch((e) => console.log(e));
  };
};
