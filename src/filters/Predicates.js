import {
  TEN_BIS,
  MINIMAL_RATING,
  CUISINE,
  MAX_DELIVERY_TIME_IN_MINUTES
} from "./FiltersNames";

export const predicates = {
  [CUISINE]: cuisine => restaurant => restaurant.cuisine === cuisine,
  [TEN_BIS]: () => restaurant => restaurant.is10Bis,
  [MAX_DELIVERY_TIME_IN_MINUTES]: deliveryTime => restaurant =>
    restaurant.maxDeliveryTimeInMinutes <= deliveryTime,
  [MINIMAL_RATING]: rating => restaurant => restaurant.rating >= rating
};
