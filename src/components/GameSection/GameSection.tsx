import React, { FC, useEffect, useRef, useState } from "react";
import GameCard from "../GameCard/GameCard";
import { cards, card } from "../../data/cardData";
import { getShuffledPairsArr, shuffle } from "../../utils/functions";
import styles from "./GameSection.module.scss";
import { GameProps } from "../../data/gameOptions";

const GameSection: FC<GameProps> = ({ difficulty, onClickSelectOptions }) => {
  const [gameCards, setGameCards] = useState<card[]>([]);
  const [difficultyStyle, setDifficultyStyle] = useState<string>("");
  const [pickedCards, setPickedCards] = useState<number[]>([]);
  const [onDelay, setOnDelay] = useState<boolean>(false);

  useEffect(() => {
    let cardsSet = shuffle(cards);
    setDifficultyStyle(
      difficulty === 3 ? "hard" : difficulty === 2 ? "medium" : "light"
    );
    switch (difficulty) {
      case 1:
        cardsSet = cardsSet.slice(0, 6);
        break;
      case 2:
        cardsSet = cardsSet.slice(0, 12);
        break;

      default:
        break;
    }
    const shuffledCardsPairs = getShuffledPairsArr(cardsSet);
    setGameCards(shuffledCardsPairs);
  }, [difficulty]);

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
    <div className={styles.wrapper}>
      <div
        className={`${styles.gameSection} ${
          difficulty === 3
            ? styles.hard
            : difficulty === 2
            ? styles.medium
            : styles.light
        }`}
      >
        {gameCards.map((card, index) => (
          <GameCard
            key={`${card.pairId}card${index}`}
            {...card}
            onClick={() => handleClick(card.pairId, index)}
          />
        ))}
      </div>
      <button onClick={onClickSelectOptions}>?????????????? ??????????????????</button>
    </div>
  );
};

export default GameSection;
