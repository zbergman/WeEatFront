import React from "react";
import PropTypes from "prop-types";
import styles from "./CuisineIcon.module.scss";
import { CUISINE_ICONS } from "../../constants/Constants";
import cn from "classnames";

export const CuisineIcon = props => {
  return (
    <i className={cn(CUISINE_ICONS[props.cuisine] || CUISINE_ICONS["default"], styles.cuisineIcon)}/>
  );
};

CuisineIcon.propTypes = {
  cuisine: PropTypes.string.isRequired
};
