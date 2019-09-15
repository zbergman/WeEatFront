import React from "react";
import { applyFilter, removeFilter } from "../../actions/index";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { RESTAURANT_NAME } from "../../filters/FiltersNames";

const SearchRestaurant = props => {
  const handleOnChange = (e, data) => {
    data.value.length > 0
      ? props.applyFilter(RESTAURANT_NAME, data.value)
      : props.removeFilter(RESTAURANT_NAME);
  };

  return (
    <Input
      icon="search"
      placeholder="Search..."
      onChange={debounce(handleOnChange, 500)}
    />
  );
};

SearchRestaurant.propTypes = {
  applyFilter: PropTypes.func,
  removeFilter: PropTypes.func
};

const mapStateToProps = state => state;
const mapDispatchToProps = { applyFilter, removeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRestaurant);
