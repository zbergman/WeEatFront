import { keysToCamel } from "../utils/Utilities";
import axios from "axios";

const SERVER_CALL = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  transformResponse: data => keysToCamel(JSON.parse(data))
});

export const fetchRestaurants = async () =>
  (await SERVER_CALL.get("/restaurants")).data;

export const createRestaurant = async (restaurant) =>
  (await SERVER_CALL.post(
    "/restaurants",
    { restaurant: restaurant })).data;
