import React from "react";
import { Input } from 'semantic-ui-react'
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerImage}>
        <div className={styles.headerText}>WeEat</div>
      </div>
    </header>
  );
};
