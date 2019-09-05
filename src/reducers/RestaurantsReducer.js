import {
  LOAD_RESTAURANTS,
  SET_CURRENT_RESTAURANT,
  ADD_RESTAURANT
} from "../constants/ActionTypes";

const initialState = {
  restaurants: [],
  currentRestaurant: {},
  filters: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case SET_CURRENT_RESTAURANT:
      return { ...state, currentRestaurant: action.payload };
    case ADD_RESTAURANT:
      return { ...state, restaurants: [...state.restaurants, action.payload] };
    default:
      return state;
  }
};
