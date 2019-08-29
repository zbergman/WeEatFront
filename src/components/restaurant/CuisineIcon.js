import React from 'react';
import PropTypes from 'prop-types';
import './CuisineIcon.scss';

export const CuisineIcon = (props) => {
    const CUISINES_ICON_CLASS = {
        italian: 'fas fa-pizza-slice',
        asian: 'fas fa-pepper-hot',
        vegan: 'fa fa-leaf',
        american: 'fas fa-hamburger	',
        sweet: 'fas fa-ice-cream',
        breakFast: 'fas fa-egg',
        sandwich: 'fas fa-bread-slice',
        default: 'fas fa-utensils'
    }

    return (
        <i className={`${CUISINES_ICON_CLASS[props.cuisine] ? CUISINES_ICON_CLASS[props.cuisine] : CUISINES_ICON_CLASS['default']}`}></i>
    )
};

CuisineIcon.propTypes = {
    cuisine: PropTypes.string.isRequired
}