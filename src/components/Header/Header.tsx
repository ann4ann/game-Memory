import React, { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <p>Welcome to my project</p>
      <h1>Game "memory"</h1>
    </header>
  );
};

export default Header;
