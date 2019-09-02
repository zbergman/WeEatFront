import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CuisineIcon } from './CuisineIcon';
import './RestaurantCard.scss';
import { TenBis } from '../TenBis';
import { Rating } from 'semantic-ui-react';

export class RestaurantCard extends Component {
    render() {
        return (
            <div id="restaurant-card" className="title active">
                <div id="cuisine">
                    <CuisineIcon cuisine={this.props.cuisine}/>
                </div>            
                <div id="restaurants-details">
                    <div id="restaurant-title">
                        {this.props.name}
                    </div>
                    <div>{this.props.address}</div>
                    <div id="restaurant-measures">
                        <div>~{this.props.maxDeliveryTimeInMinutes} Minutes</div>
                        { this.props.is10Bis && <div><TenBis /></div> }
                        <Rating defaultRating={Math.round(this.props.rating)} maxRating={5} disabled />
                    </div>
                </div>
            </div>
        )
    }
}

RestaurantCard.propTypes = {
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    is10Bis: PropTypes.bool,
    address: PropTypes.string.isRequired,
    maxDeliveryTimeInMinutes: PropTypes.number.isRequired
}