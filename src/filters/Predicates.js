export const predicates = {
    cuisinePredicate: (cuisine) => {
        return (restaurant) => restaurant.cuisine === cuisine;
    }, tenBisPredicate: () => {
        return (restaurant) => restaurant.is10Bis;
    }, maxDeliveryTimeInMinutesPredicate: (deliveryTime) => {
        return (restaurant) => restaurant.maxDeliveryTimeInMinutes <= deliveryTime;
    }, minimalRatingPredicate: (rating) => {
        return (restaurant) => restaurant.rating >= rating;
    }
};