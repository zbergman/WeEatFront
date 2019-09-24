import React, { Component } from "react";
import { Dropdown, Rating, Item, Checkbox, Button } from "semantic-ui-react";
import { CUISINE_TYPES } from "../../constants/Constants";
import { Slider } from "react-semantic-ui-range";
import {
  MAX_DELIVERY_TIME_IN_MINUTES,
  CUISINE,
  MINIMAL_RATING,
  TEN_BIS
} from "../../filters/FiltersNames";
import { applyFilter, removeFilter, clearFilters } from "../../actions/index";
import { connect } from "react-redux";
import styles from "./FiltersComponent.module.scss";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import { getRestaurantsFilters } from "../../selectors/FiltersSelectors";
import PropTypes from "prop-types";
import { TenBis } from "../TenBis";

const SLIDER_STYLE = { trackFill: { backgroundColor: "#f61f06" } };

class FiltersComponent extends Component {
  static propTypes = {
    applyFilter: PropTypes.func,
    removeFilter: PropTypes.func,
    clearFilters: PropTypes.func,
    filtersValues: PropTypes.object
  };

  sliderSettings = {
    start: 120,
    min: 0,
    max: 120,
    step: 15,
    onChange: value => {
      this.props.applyFilter(MAX_DELIVERY_TIME_IN_MINUTES, value);
    }
  };

  handleCuisineChange = (e, cuisineObject) => {
    this.props.applyFilter(CUISINE, cuisineObject.value);
  };

  handleRatingChange = (e, ratingObject) => {
    this.props.applyFilter(MINIMAL_RATING, ratingObject.rating);
  };

  handleTenBisChange = (e, tenBisObject) => {
    tenBisObject.checked
      ? this.props.applyFilter(TEN_BIS, true)
      : this.props.removeFilter(TEN_BIS);
  };

  handleClearFilters = () => {
    this.props.clearFilters();
  };

  render() {
    return (
      <div className={styles.filtersContainer}>
        <Item>
          <Item.Description>
            <Dropdown
              placeholder="Select Cuisine"
              search
              selection
              options={CUISINE_TYPES}
              onChange={this.handleCuisineChange}
              value={this.props.filtersValues[CUISINE]}
            />
          </Item.Description>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>Minimal rating</Item.Header>
            <Item.Description>
              <Rating
                rating={this.props.filtersValues[MINIMAL_RATING]}
                maxRating={5}
                clearable
                size="large"
                onRate={this.handleRatingChange}
              />
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>Maximal delivery time</Item.Header>
            <Item.Description>
              <Slider
                value={this.props.filtersValues[MAX_DELIVERY_TIME_IN_MINUTES]}
                settings={this.sliderSettings}
                style={SLIDER_STYLE}
              />
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Description className={styles.tenBisFilterContainer}>
              <Checkbox
                checked={this.props.filtersValues[TEN_BIS]}
                onChange={this.handleTenBisChange}
              />
              <TenBis className={styles.tenBis}/>
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Description>
              <Button onClick={this.handleClearFilters} className={styles.clearFilter}>
                <Icon name="times circle outline"/>
                <div>Clear All Filters</div>
              </Button>
            </Item.Description>
          </Item.Content>
        </Item>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filtersValues: getRestaurantsFilters(state) });
const mapDispatchToProps = { applyFilter, removeFilter, clearFilters };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersComponent);
