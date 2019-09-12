import React, { Component } from "react";
import { Accordion, Icon, AccordionContent } from "semantic-ui-react";
import { RestaurantCard } from "./RestaurantCard";
import PropTypes from "prop-types";
import ReviewsList from "../review/ReviewsList";
import { connect } from "react-redux";
import { getRestaurants, setCurrentRestaurantId } from "../../actions/index";
import styles from "./RestaurantsList.module.scss";

class RestaurantsList extends Component {
  state = { activeRestaurantId: null };

  static propTypes = {
    restaurants: PropTypes.object,
    setCurrentRestaurantId: PropTypes.func,
    getRestaurants: PropTypes.func,
    filters: PropTypes.object
  };

  componentDidMount() {
    this.props.getRestaurants();
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeRestaurantId } = this.state;
    const newCurrentRestaurantId = activeRestaurantId === index ? null : index;

    this.setState({ activeRestaurantId: newCurrentRestaurantId });
    this.props.setCurrentRestaurantId(newCurrentRestaurantId);
  };

  filterRestaurants() {
    const { restaurants, filters } = this.props;
    let filteredRestaurants = Object.values(restaurants);
    Object.values(filters.predicates).forEach(filter => {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        filter(restaurant)
      );
    });

    return filteredRestaurants;
  }

  render() {
    const { activeRestaurantId } = this.state;
    const filteredRestaurants = this.filterRestaurants();
    return (
      <Accordion>
        {Object.values(filteredRestaurants).map(restaurant => {
          return (
            <div key={restaurant.id}>
              <Accordion.Title
                active={activeRestaurantId === restaurant.id}
                index={restaurant.id}
                onClick={this.handleClick}
                className={styles.accordionTitleContainer}
              >
                <Icon name="dropdown" />
                <RestaurantCard {...restaurant} />
              </Accordion.Title>
              <AccordionContent active={activeRestaurantId === restaurant.id}>
                <ReviewsList reviews={restaurant.reviews} />
              </AccordionContent>
            </div>
          );
        })}
      </Accordion>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  filters: state.filters
});
const mapDispatchToProps = { getRestaurants, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);
