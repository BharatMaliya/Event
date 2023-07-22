import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Link className={styles.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
