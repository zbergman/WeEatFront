import React from "react";
import { Dropdown, Rating, Item, Radio } from "semantic-ui-react";
import { CUISINE_TYPES } from "../../constants/Constants";
import { Slider } from "react-semantic-ui-range";
import styles from "./FiltersComponent.module.scss";

const SLIDER_STYLE = { trackFill: { backgroundColor: "#f61f06" } };

const sliderSettings = {
  start: 120,
  min: 0,
  max: 120,
  step: 15,
  onChange: value => {}
};

export const FiltersComponent = () => {
  return (
    <div className={styles.filtersContainer}>
      <Item>
        <Item.Description>
          <Dropdown
            placeholder="Select Cuisine"
            search
            selection
            options={CUISINE_TYPES}
          />
        </Item.Description>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>Minimal rating</Item.Header>
          <Item.Description>
            <Rating defaultRating={0} maxRating={5} clearable />
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>Maximal delivery time</Item.Header>
          <Item.Description>
            <Slider settings={sliderSettings} style={SLIDER_STYLE} />
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header>Accepts 10Bis</Item.Header>
          <Item.Description>
            <Radio toggle />
          </Item.Description>
        </Item.Content>
      </Item>
    </div>
  );
};
