import React, { FC, useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";
import { cards, card } from "../../data/cardData";
import { shuffle } from "../../utils/functions";
import styles from "./GameSection.module.scss";

const GameSection: FC = () => {
  const [gameCards, setGameCards] = useState<card[]>([]);
  const [pickedCards, setPickedCards] = useState<number[]>([]);
  const [onDelay, setOnDelay] = useState<boolean>(false);

  useEffect(() => {
    const cardsFirstSet = JSON.parse(JSON.stringify(cards));
    const cardsSecondSet = JSON.parse(JSON.stringify(cards));
    const cardsPairs = [...cardsFirstSet, ...cardsSecondSet];
    const chuffledCardsPairs = shuffle(shuffle(cardsPairs));
    setGameCards(chuffledCardsPairs);
  }, []);

  useEffect(() => {
    if (pickedCards.length > 1) {
      if (pickedCards[0] === pickedCards[1]) {
      } else {
        const newCardsArr = gameCards.map((card) => {
          return card.pairId === pickedCards[0] ||
            card.pairId === pickedCards[1]
            ? { ...card, isOpen: false }
            : card;
        });
        setOnDelay(true);
        setTimeout(() => {
          setGameCards(newCardsArr);
          setOnDelay(false);
        }, 1500);
      }
    }
  }, [pickedCards]);

  const handleClick = (pairId: number, index: number) => {
    if (pickedCards.length === 2 && !onDelay) {
      setPickedCards([pairId]);

      const newCardsArr = gameCards;
      newCardsArr[index].isOpen = true;
      setGameCards(newCardsArr);
    } else if (pickedCards.length < 2) {
      setPickedCards((prevState) => [...prevState, pairId]);

      const newCardsArr = gameCards;
      newCardsArr[index].isOpen = true;
      setGameCards(newCardsArr);
    }
  };

  return (
    <div className={styles.gameSection}>
      {gameCards.map((card, index) => (
        <GameCard
          key={`${card.pairId}card${index}`}
          {...card}
          onClick={() => handleClick(card.pairId, index)}
        />
      ))}
    </div>
  );
};

export default GameSection;
