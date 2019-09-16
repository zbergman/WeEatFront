export const addRestaurantValidator = val => {
  const errors = {};

  if (!val.name) {
    errors.name = "Required";
  }

  if (!val.cuisine || val.cuisine.length === 0) {
    errors.cuisine = "Required";
  }

  if (!val.maxDeliveryTimeInMinutes) {
    errors.maxDeliveryTimeInMinutes = "Required";
  } else if (val.maxDeliveryTimeInMinutes > 120) {
    errors.maxDeliveryTimeInMinutes = "Must be lower than 120";
  }

  if (!val.address) {
    errors.address = "Required";
  }

  return errors;
};