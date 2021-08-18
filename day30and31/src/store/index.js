import { createStore,combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer";
const root=combineReducers({
    ProductReducer,
    CartReducer
});
const store=createStore(root,devToolsEnhancer());
export default store;