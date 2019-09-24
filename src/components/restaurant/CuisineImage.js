import React from "react";
import PropTypes from "prop-types";
import styles from "./CuisineImage.module.scss";
import { CUISINE_IMAGES } from "../../constants/Constants";
import { Image } from "semantic-ui-react";
export const CuisineImage = props => {
  const imageSource = CUISINE_IMAGES[props.cuisine] || CUISINE_IMAGES["default"];
  return (
    <Image src={imageSource} className={styles.cuisineImage}/>
  );
};

CuisineImage.propTypes = {
  cuisine: PropTypes.string.isRequired
};
