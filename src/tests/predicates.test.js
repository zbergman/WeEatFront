import {
  MAX_DELIVERY_TIME_IN_MINUTES,
  CUISINE,
  MINIMAL_RATING,
  TEN_BIS,
  RESTAURANT_NAME
} from "../filters/FiltersNames";
import { predicates } from "../filters/Predicates";
import { filterByPredicates } from "../utils/Utilities";

const aroma = {
  name: "Aroma",
  cuisine: "sandwiches",
  is10Bis: true,
  rating: 2,
  address: "Tel Aviv",
  maxDeliveryTimeInMinutes: 50,
  reviews: []
};

const oyama = {
  name: "Oyama",
  cuisine: "asian",
  is10Bis: true,
  rating: 4,
  address: "Petah-Tikva",
  maxDeliveryTimeInMinutes: 80,
  reviews: []
};

const goomba = {
  name: "Goomba",
  cuisine: "italian",
  is10Bis: false,
  rating: 5,
  address: "Tel Aviv",
  maxDeliveryTimeInMinutes: 35,
  reviews: []
};

const benedict = {
  name: "Benedict",
  cuisine: "breakFast",
  is10Bis: false,
  rating: 0,
  address: "Tel Aviv",
  maxDeliveryTimeInMinutes: 85,
  reviews: []
};

const maxBrener = {
  name: "Max Brener",
  cuisine: "sweet",
  is10Bis: true,
  rating: 3,
  address: "Tel Aviv",
  maxDeliveryTimeInMinutes: 75,
  reviews: []
};

const restaurants = [aroma, oyama, goomba, benedict, maxBrener];

test("filter restaurants by 10bis", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[TEN_BIS]()
  ]);
  const expected = [aroma, oyama, maxBrener];

  expect(new Set(actual)).toEqual(new Set(expected));
});

test("filter restaurants by max delivery time", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[MAX_DELIVERY_TIME_IN_MINUTES](75)
  ]);
  const expected = [maxBrener, goomba, aroma];

  expect(new Set(actual)).toEqual(new Set(expected));
});

test("filter restaurants by cuisine", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[CUISINE]("asian")
  ]);
  const expected = [oyama];

  expect(new Set(actual)).toEqual(new Set(expected));
});

test("filter restaurants by minimal rating", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[MINIMAL_RATING](3)
  ]);
  const expected = [oyama, maxBrener, goomba];

  expect(new Set(actual)).toEqual(new Set(expected));
});

test("filter restaurants by name", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[RESTAURANT_NAME]("ar")
  ]);
  const expected = [aroma];

  expect(new Set(actual)).toEqual(new Set(expected));
});

test("filter restaurant by name, 10bis, rating, maximal delivery time and cuisine", () => {
  const actual = filterByPredicates(restaurants, [
    predicates[RESTAURANT_NAME]("ar"),
    predicates[TEN_BIS](),
    predicates[MINIMAL_RATING](1),
    predicates[MAX_DELIVERY_TIME_IN_MINUTES](50),
    predicates[CUISINE]("sandwiches")
  ]);
  const expected = [aroma];

  expect(new Set(actual)).toEqual(new Set(expected));
});
