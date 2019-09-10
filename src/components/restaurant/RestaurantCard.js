import React from "react";
import PropTypes from "prop-types";
import { CuisineIcon } from "./CuisineIcon";
import styles from "./RestaurantCard.module.scss";
import { TenBis } from "../TenBis";
import { Rating } from "semantic-ui-react";

export const RestaurantCard = ({
  cuisine,
  name,
  address,
  maxDeliveryTimeInMinutes,
  is10Bis,
  rating
}) => {
  return (
    <div className={styles.restaurantCard}>
      <div>
        <CuisineIcon cuisine={cuisine} />
      </div>
      <div className={styles.restaurantsDetails}>
        <div className={styles.restaurantTitle}>{name}</div>
        <div>{address}</div>
        <div className={styles.restaurantMeasures}>
          <div>~{maxDeliveryTimeInMinutes} Minutes</div>
          {is10Bis && <TenBis className={styles.tenBisImage} />}
          <Rating defaultRating={Math.round(rating)} maxRating={5} disabled />
        </div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  is10Bis: PropTypes.bool,
  address: PropTypes.string.isRequired,
  maxDeliveryTimeInMinutes: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
