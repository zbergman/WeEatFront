import React from "react";
import logo from "../assets/images/10bis.png";
import styles from "./TenBis.module.scss";
import cn from "classnames";

export const TenBis = ({ className }) => (
  <img className={cn(styles.tenBis, className)} src={logo} alt="TenBis" />
);
