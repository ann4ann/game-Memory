import React, { FC } from "react";
import styles from "./FooterItem.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/ann4ann/game-Memory">GitHub</a>{" "}
    </div>
  );
};

export default Footer;
