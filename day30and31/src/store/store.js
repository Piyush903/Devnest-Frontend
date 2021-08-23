import { createStore,combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer=combineReducers({
    ProductReducer,
    CartReducer
});
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store=createStore(persistedReducer,devToolsEnhancer());
 export const presistedStore=persistStore(store);

