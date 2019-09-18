import React, { PureComponent } from "react";
import RestaurantCard from "./RestaurantCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRestaurants, setCurrentRestaurantId } from "../../actions/index";
import { getFilteredRestaurants } from "../../selectors/RestaurantSelectors";
import { Card } from "semantic-ui-react";
import styles from "./RestaurantsList.module.scss";

class RestaurantsList extends PureComponent {
  state = { activeRestaurantId: null };

  static propTypes = {
    filteredRestaurants: PropTypes.array,
    setCurrentRestaurantId: PropTypes.func,
    getRestaurants: PropTypes.func
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

  render() {
    const { filteredRestaurants } = this.props;

    return (
      <Card.Group stackable className={styles.restaurantsListContainer}>
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => ({
  filteredRestaurants: getFilteredRestaurants(state)
});
const mapDispatchToProps = { getRestaurants, setCurrentRestaurantId };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsList);
