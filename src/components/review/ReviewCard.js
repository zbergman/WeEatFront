import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';
import { dateFormatter } from '../../utils/Formatters';
import './ReviewCard.scss';

export const ReviewCard = (props) => {
    return (
        <div id='review-card-container'>
            <div>
                <div id='review-card-title'>{props.reviewerName}</div>
                <Rating defaultRating={Math.round(props.rating)} maxRating={5} disabled />
            </div>
            <div id='review-date'>{dateFormatter(props.createdAt)}</div>
            <div>{props.text}</div>
        </div>
    );
};

ReviewCard.propTypes = {
    text: PropTypes.string.isRequired,
    reviewerName: PropTypes.string.isRequired,    
    rating: PropTypes.number,
    createdAt: PropTypes.string.isRequired
}