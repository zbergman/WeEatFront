import React, { Component } from 'react';
import { Dropdown, Rating, Item, Checkbox } from 'semantic-ui-react';
import { CUISINE_TYPES } from '../../constants/Constants';
import { Slider } from "react-semantic-ui-range";
import { MAX_DELIVERY_TIME_IN_MINUTES_PREDICATE, CUISINE_PREDICATE, MINIMAL_RATING_PREDICATE, TEN_BIS_PREDICATE } from '../../filters/PredicateNames';
import { predicates } from '../../filters/Predicates';
import {  addFilter, removeFilter } from '../../actions/index';
import { connect } from 'react-redux';
import './FiltersComponent.scss';

class FiltersComponent extends Component {
    sliderSettings = {
        start: 120,
        min: 0,
        max: 120,
        step: 15,
        onChange: value => {
            this.props.addFilter(
                MAX_DELIVERY_TIME_IN_MINUTES_PREDICATE,
                predicates[MAX_DELIVERY_TIME_IN_MINUTES_PREDICATE](value)
            );
        }
    };

    handleCuisineChange = (e, cuisineObject) => {
        this.props.addFilter(
            CUISINE_PREDICATE,
            predicates[CUISINE_PREDICATE](cuisineObject.value)
        );
    };

    handleRatingChange = (e, ratingObject) => {
        this.props.addFilter(
            MINIMAL_RATING_PREDICATE,
            predicates[MINIMAL_RATING_PREDICATE](ratingObject.rating)
        );
    };

    handleTenBisChange = (e, tenBisObject) => {
        if (tenBisObject.checked) {
            this.props.addFilter(
                TEN_BIS_PREDICATE,
                predicates[TEN_BIS_PREDICATE]()
            );
        } else {
            this.props.removeFilter(TEN_BIS_PREDICATE);
        }
    };

    render() {
        return (
            <div id='filters-container'>
                <Item>
                    <Item.Description>
                        <Dropdown
                            placeholder='Select Cuisine'
                            search
                            selection
                            options={CUISINE_TYPES}
                            onChange={this.handleCuisineChange}
                        />
                    </Item.Description>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Header>Minimal rating</Item.Header>
                        <Item.Description>
                            <Rating defaultRating={0} maxRating={5} clearable size='large' onRate={this.handleRatingChange}/>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Header>Maximal delivery time</Item.Header>
                        <Item.Description>
                            <Slider settings={this.sliderSettings} style={{trackFill: {backgroundColor: "#f61f06"}}}/>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>
                        <Item.Description>
                            <Checkbox label='Accepts 10Bis' onChange={this.handleTenBisChange}/>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </div>
        )
    }
}

export default connect(
    (state) => (state),
    { addFilter, removeFilter }
)(FiltersComponent)