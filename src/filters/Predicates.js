import {
  TEN_BIS,
  MINIMAL_RATING,
  CUISINE,
  MAX_DELIVERY_TIME_IN_MINUTES
} from "./FiltersNames";

export const predicates = {
  [CUISINE]: cuisine => {
    return restaurant => restaurant.cuisine === cuisine;
  },
  [TEN_BIS]: () => {
    return restaurant => restaurant.is10Bis;
  },
  [MAX_DELIVERY_TIME_IN_MINUTES]: deliveryTime => {
    return restaurant => restaurant.maxDeliveryTimeInMinutes <= deliveryTime;
  },
  [MINIMAL_RATING]: rating => {
    return restaurant => restaurant.rating >= rating;
  }
};
