import rootReducer from "./reducers";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
export default store;