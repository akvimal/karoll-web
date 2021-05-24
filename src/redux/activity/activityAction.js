import {
  FETCH_ACTIVITY_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_REQUEST,
  ADD_ACTIVITY_FAILURE,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_FAILURE,
  DELETE_ACTIVITY_SUCCESS,
  ACTIVITYIDBY_SUCCESS,
  DELETE_ACTIVITY_REQUEST,
} from "./activityType";

import API from "../../config/api";
import { getCoursesById } from "../course/courseAction";

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

const AddActivitySuccess = () => {
  return {
    type: ADD_ACTIVITY_SUCCESS,
  };
};

const AddActivityFailure = (error) => {
  return {
    type: ADD_ACTIVITY_FAILURE,
    payload: error,
  };
};
const DeleteActivityRequest = () => {
  return {
    type: DELETE_ACTIVITY_REQUEST,
  };
};

const DeleteActivitySuccess = () => {
  return {
    type: DELETE_ACTIVITY_SUCCESS,
  };
};

const DeleteActivityFailure = (error) => {
  return {
    type: DELETE_ACTIVITY_FAILURE,
    payload: error,
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
