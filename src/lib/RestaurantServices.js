import { keysToCamel } from '../utils/Utilities';

export const fetchRestaurants = () => {
    return fetch('http://localhost:3000/restaurants')
        .then(res =>  res.json())
        .then(res => keysToCamel(res));
}