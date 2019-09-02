import React from 'react';
import PropTypes from 'prop-types';
import './CuisineIcon.scss';
import { CUISINE_TYPES } from '../constants/Constants';

export const CuisineIcon = (props) => {
    const cuisines = {};
    CUISINE_TYPES.forEach(cuisine => cuisines[cuisine.key] = cuisine.iconClass );

    return (
        <i className={`${cuisines[props.cuisine] ? cuisines[props.cuisine] : cuisines['default']}`}></i>
    )
};

CuisineIcon.propTypes = {
    cuisine: PropTypes.string.isRequired
}