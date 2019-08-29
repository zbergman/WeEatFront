import React from 'react';
import PropTypes from 'prop-types';

export const ReviewCard = (props) => {
    return (
        <div>
            <div>{props.reviewerName}</div>
            <div>{props.createdAt}</div>
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