import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT,
  ADD_RESTAURANT
} from "../constants/ActionTypes";
import { handleActions } from "redux-actions";

const initialState = {
  restaurants: [],
  currentRestaurant: {},
  filters: {}
};

export default handleActions(
  {
    [LOAD_RESTAURANTS]: (state, action) => ({
      ...state,
      restaurants: action.payload
    }),

    [SET_CURRENT_RESTAURANT]: (state, action) => ({
      ...state,
      currentRestaurant: action.payload
    }),

    [ADD_RESTAURANT]: (state, action) => ({
      ...state,
      restaurants: [...state.restaurants, action.payload]
    })
  },
  initialState
);
