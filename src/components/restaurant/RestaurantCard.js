import React, { Component } from "react";
import PropTypes from "prop-types";
import { CuisineIcon } from "./CuisineIcon";
import styles from "./RestaurantCard.module.scss";
import { TenBis } from "../TenBis";
import { Rating } from "semantic-ui-react";

export class RestaurantCard extends Component {
  render() {
    return (
      <div className={styles.restaurantCard}>
        <div>
          <CuisineIcon cuisine={this.props.cuisine} />
        </div>
        <div className={styles.restaurantsDetails}>
          <div className={styles.restaurantTitle}>{this.props.name}</div>
          <div>{this.props.address}</div>
          <div className={styles.restaurantMeasures}>
            <div>~{this.props.maxDeliveryTimeInMinutes} Minutes</div>
            {this.props.is10Bis && <TenBis className={styles.tenBisImage}/>}
            <Rating
              defaultRating={Math.round(this.props.rating)}
              maxRating={5}
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  is10Bis: PropTypes.bool,
  address: PropTypes.string.isRequired,
  maxDeliveryTimeInMinutes: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
