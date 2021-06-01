import {
  FETCH_STACK_FAILURE,
  FETCH_STACK_SUCCESS,
  FETCH_STACK_REQUEST,
} from "./stacktagType";

const initialState = {
  loading: true,
  stackData: [],
  error: "",
};

const stacktagReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STACK_REQUEST:
      return { ...state, loading: true };
    case FETCH_STACK_SUCCESS:
      return { ...state, loading: false, stackData: action.payload, error: "" };
    case FETCH_STACK_FAILURE:
      return { ...state, loading: false, stackData: [], error: action.payload };
    default:
      return state;
  }
};
export default stacktagReducer;
