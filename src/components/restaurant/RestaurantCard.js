import React from "react";
import PropTypes from "prop-types";
import { CuisineImage } from "./CuisineImage";
import styles from "./RestaurantCard.module.scss";
import { TenBis } from "../TenBis";
import { Rating, Card, Button } from "semantic-ui-react";

export const RestaurantCard = ({
  cuisine,
  name,
  address,
  maxDeliveryTimeInMinutes,
  is10Bis,
  rating
}) => {
  return (
    <Card>
      <CuisineImage cuisine={cuisine} />
      <Card.Content>
        <Card.Header className={styles.cardHeader}>
          <div>{name}</div>
          <Rating defaultRating={Math.round(rating)} maxRating={5} disabled />
        </Card.Header>
        <Card.Meta>{address}</Card.Meta>
        <Card.Description className={styles.cardDescription}>
          <div className={styles.descriptionArea}>
            <div>~{maxDeliveryTimeInMinutes} Minutes</div>
            {is10Bis && <TenBis className={styles.tenBisImage} />}
          </div>
          <div className={styles.descriptionArea}>
            <Button
              icon="comment outline"
              className={styles.reviewButton}
            />
            <Button icon="angle down" className={styles.reviewButton}/>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
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
