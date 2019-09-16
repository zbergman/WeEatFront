import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import restaurantReducer from "./reducers/RestaurantsReducer";
import { reducer as form } from "redux-form";

export default createStore(
  combineReducers({ restaurantReducer, form }),
  composeWithDevTools(applyMiddleware(thunk))
);
