import { keysToCamel } from "../utils/Utilities";
import axios from "axios";

const SERVER_CALL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  transformResponse: data => keysToCamel(JSON.parse(data))
});

export const fetchRestaurants = async () =>
  (await SERVER_CALL.get("/restaurants")).data;

const formatRestaurantObject = data => ({
  restaurant: {
    name: data.name,
    cuisine: data.cuisine,
    is_10_bis: !!data.is10Bis,
    address: data.address,
    max_delivery_time_in_minutes:
    data.maxDeliveryTimeInMinutes
  }
});

export const createRestaurant = async restaurant =>
  (await SERVER_CALL.post(
    "/restaurants",
    restaurant,
    {
      transformRequest: [
        formatRestaurantObject,
        ...axios.defaults.transformRequest
      ]
    }
  )).data;
