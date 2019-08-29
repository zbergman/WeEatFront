import React from 'react';
import { Rating } from 'semantic-ui-react';
import './Rating.scss';

export const MyRating = (props, maxRating) => {
    return (
        <Rating defaultRating={Math.round(props.rating)} maxRating={props.maxRating} disabled />
    )
}