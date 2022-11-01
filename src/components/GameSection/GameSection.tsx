import React, { useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";
import { cards, card } from "../../data/cardData";
import { shuffle } from "../../utils/functions";

const GameSection: React.FC = () => {
  const [gameCards, setGameCards] = useState<card[]>([]);
  const [pickedCards, setPickedCards] = useState<number[]>([]);
  useEffect(() => {
    const cardsPairs = [...cards, ...cards];
    const chuffleCardsPairs = shuffle(shuffle(cardsPairs));
    setGameCards(chuffleCardsPairs);
  }, []);
  useEffect(() => {
    if (pickedCards.length > 1 && pickedCards[0] === pickedCards[1]) {
      const newCardsArr = gameCards.filter(
        (card) => card.pairId != pickedCards[0]
      );
      setGameCards(newCardsArr);
    }
  }, [pickedCards]);

  const handleClick = (pairId: number) => {
    if (pickedCards.length === 2) {
      setPickedCards([pairId]);
    }
    if (pickedCards.length < 2) {
      setPickedCards((prevState) => [...prevState, pairId]);
    }
  };

  return (
    <div
      style={{
        flexGrow: 1,
        padding: "25px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#957B8D",
      }}
    >
      {gameCards.map((card, index) => (
        <GameCard
          key={`${card.pairId}card${index}`}
          {...card}
          onClick={() => handleClick(card.pairId)}
        />
      ))}
    </div>
  );
};

export default GameSection;
