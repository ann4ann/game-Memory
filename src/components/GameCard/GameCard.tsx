import React, { FC } from "react";
import { card as cardProps } from "../../data/cardData";

const GameCard: FC<cardProps> = ({ text, isOpen, imgSrc, onClick }) => {
  return (
    <div
      style={{
        width: "115px",
        height: "140px",
        margin: "5px",
        borderRadius: "20px",
        border: "3px solid #A5A5A5",
        padding: "10px",
        boxSizing: "border-box",
        background: `${
          isOpen ? `top / contain no-repeat url(${imgSrc})` : "#A5A5A5"
        }`,
      }}
      onClick={onClick}
    >
      {isOpen && (
        <p
          style={{
            position: "relative",
            top: "85px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default GameCard;
