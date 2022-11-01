import React, { FC } from "react";
import { card as cardProps } from "../../data/cardData";

const GameCard: FC<cardProps> = ({ text, imgSrc, onClick }) => {
  return (
    <div
      style={{
        width: "110px",
        height: "140px",
        margin: "5px",
        borderRadius: "20px",
        padding: "10px",
        boxSizing: "border-box",
        background: `top / contain no-repeat  url(${imgSrc})`,
        backgroundColor: "#C7D0CC",
      }}
      onClick={onClick}
    >
      <p
        style={{
          position: "relative",
          top: "87px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default GameCard;
