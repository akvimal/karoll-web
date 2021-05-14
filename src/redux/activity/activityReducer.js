import {
  FETCH_ACTIVITY_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_REQUEST,
} from "./activityType";

const initialState = {
  loading: true,
  ActivityData: [],
  error: "",
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_REQUEST:
      return { ...state, loading: true };
    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        ActivityData: action.payload,
        error: "",
      };
    case FETCH_ACTIVITY_FAILURE:
      return {
        ...state,
        loading: false,
        ActivityData: [],
        error: action.payload,
      };

    case ADD_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default activityReducer;
