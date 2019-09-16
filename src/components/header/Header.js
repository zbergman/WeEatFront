import React from "react";
import SearchRestaurant from "../filters/SearchRestaurant";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerImage}>
        <div className={styles.headerText}>WeEat</div>
        <SearchRestaurant />
      </div>
    </header>
  );
};
