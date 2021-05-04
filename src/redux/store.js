import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";

// const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
