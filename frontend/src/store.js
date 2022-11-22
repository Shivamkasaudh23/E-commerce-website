import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { productListReducers } from "./reducers/productReducers";

const reducer = combineReducers({
  productList : productListReducers,
})

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

