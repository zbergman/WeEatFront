import React from 'react';
// import PropTypes from 'prop-types';
import { CuisineIcon } from './CuisineIcon';
import './RestaurantCard.css';

export const RestaurantCard = (props) => {
    
    return (
        <div className='restaurant-card-container'>
            <div className='restaurant-card-item'>
            <CuisineIcon cuisine={props.cuisine}/>
            </div>            
            <div className='restaurant-card-item'>{props.name}</div>
        </div>
    )
};

// RestaurantCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     cuisine: PropTypes.string.isRequired,
//     is10Bis: PropTypes.bool,
//     address: PropTypes.string.isRequired,
//     maxDeliveryTimeInMinutes: PropTypes.number.isRequired
// }