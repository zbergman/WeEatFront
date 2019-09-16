import pasta from "../assets/images/Pasta.jpg";
import acaiBowl from "../assets/images/AcaiBowl.jpg";
import cupcake from "../assets/images/Cupcake.jpg";
import defaultPic from "../assets/images/Default.jpg";
import ramen from "../assets/images/Ramen.jpg";
import salad from "../assets/images/Salad.jpeg";
import sandwich from "../assets/images/Sandwich.jpg";
import hamburger from "../assets/images/Hamburger.jpg";

export const ITALIAN_CUISINE = "italian";
export const ASIAN_CUISINE = "asian";
export const VEGAN_CUISINE = "vegan";
export const AMERICAN_CUISINE = "american";
export const SWEET_CUISINE = "sweet";
export const BREAKFAST_CUISINE = "breakFast";
export const SANDWICHES_CUISINE = "sandwiches";

export const CUISINE_TYPES = [
  {
    key: ITALIAN_CUISINE,
    value: ITALIAN_CUISINE,
    text: "Italian"
  },
  {
    key: ASIAN_CUISINE,
    value: ASIAN_CUISINE,
    text: "Asian"
  },
  { key: VEGAN_CUISINE, value: VEGAN_CUISINE, text: "Vegan" },
  {
    key: AMERICAN_CUISINE,
    value: AMERICAN_CUISINE,
    text: "American"
  },
  {
    key: SWEET_CUISINE,
    value: SWEET_CUISINE,
    text: "Sweet"
  },
  {
    key: BREAKFAST_CUISINE,
    value: BREAKFAST_CUISINE,
    text: "Breakfast"
  },
  {
    key: SANDWICHES_CUISINE,
    value: SANDWICHES_CUISINE,
    text: "Sandwiches"
  }
];

export const CUISINE_ICONS = {
  [ITALIAN_CUISINE]: "fas fa-pizza-slice",
  [ASIAN_CUISINE]: "fas fa-pepper-hot",
  [VEGAN_CUISINE]: "fa fa-leaf",
  [AMERICAN_CUISINE]: "fas fa-hamburger",
  [SWEET_CUISINE]: "fas fa-ice-cream",
  [BREAKFAST_CUISINE]: "fas fa-egg",
  [SANDWICHES_CUISINE]: "fas fa-bread-slice",
  default: "fas fa-utensils"
};

export const CUISINE_IMAGES = {
  [ITALIAN_CUISINE]: pasta,
  [ASIAN_CUISINE]: ramen,
  [VEGAN_CUISINE]: salad,
  [AMERICAN_CUISINE]: hamburger,
  [SWEET_CUISINE]: cupcake,
  [BREAKFAST_CUISINE]: acaiBowl,
  [SANDWICHES_CUISINE]: sandwich,
  default: defaultPic
};
