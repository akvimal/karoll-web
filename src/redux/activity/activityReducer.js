import {
  FETCH_ACTIVITY_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_SUCCESS,
  ACTIVITYIDBY_SUCCESS,
  ADD_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_REQUEST,
  FETCH_LEARN_ACTIVITY_SUCCESS,
  FETCH_EXERCISE_ACTIVITY_SUCCESS,
  ADD_EXERCISE_ACTIVITY_REQUEST,
  ADD_EXERCISE_ACTIVITY_SUCCESS,
  ADD_LEARN_ACTIVITY_REQUEST,
  ADD_LEARN_ACTIVITY_SUCCESS,
  ADD_QUIZ_ACTIVITY_REQUEST,
  ADD_QUIZ_ACTIVITY_SUCCESS,
  FETCH_QUIZ_ACTIVITY_SUCCESS,
  FETCH_ATTEMPT_QUIZSCORE_ACTIVITY_SUCCESS,
  DELETE_QUIZ_ACTIVITY_SUCCESS,
  DELETE_QUIZ_ACTIVITY_REQUEST,
} from "./activityType";

const initialState = {
  loading: true,
  ActivityData: [],
  error: "",
  act: "",
  LearnActivityData: [],
  learnLoading: true,
  LearnErr: "",
  ExerciseActivityData: [],
  exerciseLoading: true,
  quizLoading: true,
  QuizActivityData: [],
  QuizScore: [],
  loadDeleteQuiz: true,
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
    case ACTIVITYIDBY_SUCCESS:
      return {
        ...state,
        loading: false,
        act: action.payload,
      };
    case FETCH_LEARN_ACTIVITY_SUCCESS:
      return {
        ...state,
        LearnActivityData: action.payload,
      };

    case ADD_LEARN_ACTIVITY_SUCCESS:
      return {
        ...state,
        learnLoading: false,
      };
    case ADD_LEARN_ACTIVITY_REQUEST:
      return {
        ...state,
        learnLoading: true,
      };
    case FETCH_EXERCISE_ACTIVITY_SUCCESS:
      return {
        ...state,
        ExerciseActivityData: action.payload,
      };
    case ADD_EXERCISE_ACTIVITY_REQUEST:
      return {
        ...state,
        exerciseLoading: true,
      };
    case ADD_EXERCISE_ACTIVITY_SUCCESS:
      return {
        ...state,
        exerciseLoading: false,
      };
    case ADD_QUIZ_ACTIVITY_REQUEST:
      return {
        ...state,
        quizLoading: true,
      };
    case ADD_QUIZ_ACTIVITY_SUCCESS:
      return {
        ...state,
        quizLoading: false,
      };
    case FETCH_QUIZ_ACTIVITY_SUCCESS:
      return {
        ...state,
        QuizActivityData: action.payload,
      };
    case FETCH_ATTEMPT_QUIZSCORE_ACTIVITY_SUCCESS:
      return {
        ...state,
        QuizScore: action.payload,
      };
    case DELETE_QUIZ_ACTIVITY_REQUEST:
      return {
        ...state,
        loadDeleteQuiz: true,
      };
    case DELETE_QUIZ_ACTIVITY_SUCCESS:
      return {
        ...state,
        loadDeleteQuiz: false,
      };
    default:
      return state;
  }
};
export default activityReducer;
