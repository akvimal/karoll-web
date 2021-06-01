import {
  FETCH_STACK_FAILURE,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_REQUEST,
} from "./stacktagType";

import API from "../../config/api";

const fetchStackRequest = () => {
  return {
    type: FETCH_STACK_REQUEST,
  };
};

const fetchStackSuccess = (stack) => {
  return {
    type: FETCH_STACK_SUCCESS,
    payload: stack,
  };
};

const fetchStackFailure = (error) => {
  return {
    type: FETCH_STACK_FAILURE,
    payload: error,
  };
};

export const fetchStack = () => {
  console.log("fetched");
  return (dispatch) => {
    dispatch(fetchStackRequest());
    API.get(`/api/tags`)
      .then((res) => dispatch(fetchStackSuccess(res.data)))
      .catch((e) => dispatch(fetchStackFailure(e)));
  };
};
