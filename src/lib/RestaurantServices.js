import { keysToCamel } from "../utils/Utilities";

const SERVER_URL = "http://localhost:3000";

export const fetchRestaurants = () => {
  return fetch(SERVER_URL + "/restaurants")
    .then(res => res.json())
    .then(res => keysToCamel(res));
};

export const createRestaurant = restaurant => {
  return fetch(SERVER_URL + "/restaurants/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ restaurant: restaurant })
  })
    .then(res => res.json())
    .then(res => keysToCamel(res));
};
