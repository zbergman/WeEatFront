import React from 'react';
import { Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { ReviewCard } from './ReviewCard';
import { connect } from 'react-redux';
import './ReviewsList.scss';

const ReviewsList = (props) => {

    return !props.reviews || !props.reviews.length ?
            <div className="no-reviews">No reviews.</div> :
            props.reviews.map((review) => {
                    return (
                        <div key = { review.id }>
                            <Divider />
                            <ReviewCard {...review} />                    
                        </div>
                    );
                }
            );
};

ReviewCard.propTypes = {
    reviews: PropTypes.array
};

export default connect(
    (state) => ({ reviews: state.currentRestaurant.reviews })
)(ReviewsList)