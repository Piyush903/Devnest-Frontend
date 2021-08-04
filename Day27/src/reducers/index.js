import todoReducer from "./todoreducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
	todo: todoReducer,
});
export default rootReducer;