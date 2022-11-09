import React, { FC } from "react";
import { card as cardProps } from "../../data/cardData";
import styles from "./GameCard.module.scss";

const GameCard: FC<cardProps> = ({ text, isOpen, imgSrc, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {isOpen && (
        <>
          <img src={imgSrc} alt={text} />
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default GameCard;
