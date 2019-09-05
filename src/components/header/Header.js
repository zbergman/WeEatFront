import React from "react";
import styles from "./Header.module.scss";
import headerImage from "../../assets/images/Pizza.png";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerImage} src={headerImage} alt="We Eat header" />
      <div className={styles.headerText}>WeEat</div>
    </header>
  );
};
