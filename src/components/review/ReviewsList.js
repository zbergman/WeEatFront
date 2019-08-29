import React from 'react';
import { Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { ReviewCard } from './ReviewCard';

export const ReviewsList = (props) => {

    return !props.reviews.length ? 
            <div>No reviews</div> :
            props.reviews.map((review) => {
                    return (
                        <div>
                            <Divider />
                            <ReviewCard {...review} />                    
                        </div>
                    );
                }
            );
};

ReviewCard.propTypes = {
    reviews: PropTypes.array.isRequired
}