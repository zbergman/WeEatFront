import React, { Component } from 'react';
import { RestaurantCard } from '../components/RestaurantCard'

const RESTAURANT = {
    name: 'Aroma',
    cuisine: 'sandwich',
    is10Bis: true,
    address: 'Tel-Aviv',
    maxDeliveryTimeInMinutes: 50
};

export class Home extends Component {    
    render() {
        return (
            // <div></div>
            <RestaurantCard {...RESTAURANT}></RestaurantCard>
        );
    }
}