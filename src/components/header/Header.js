import React from "react";
import SearchRestaurant from "../filters/SearchRestaurant";
import { AddRestaurantModal } from "../../components/restaurant/AddRestaurantModal";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerImage}>
        <div className={styles.headerText}>WeEat</div>
        <div className={styles.headerItemsContainer}>
          <SearchRestaurant className={styles.search} />
          <AddRestaurantModal />
        </div>
      </div>
    </header>
  );
};
