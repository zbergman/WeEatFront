import React, { Component } from 'react';
import { RestaurantsList } from '../components/restaurant/RestaurantsList';

const RESTAURANTS = [{
        id: 1,
        name: 'Aroma',
        cuisine: 'sandwich',
        is10Bis: true,
        address: 'Tel-Aviv',
        maxDeliveryTimeInMinutes: 50,
        rating: 3,
        reviews: [{
            reviewerName: "Zohar Bergman",
            text: "Nice",
            rating: 3,
            createdAt: "29.08.19"
        }]
    }, {
        id: 2,
        name: 'Oyama',
        cuisine: 'asian',
        is10Bis: false,
        address: 'Petah-Tikva',
        maxDeliveryTimeInMinutes: 80,
        rating: 4.2,
        reviews: []
    }
];

export class Home extends Component {    
    render() {
        return (
            <RestaurantsList restaurants = { RESTAURANTS } />
        );
    }
}