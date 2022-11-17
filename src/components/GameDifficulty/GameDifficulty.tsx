import React, { FC, useEffect, useState } from "react";
import { GameProps } from "../../data/gameOptions";
import styles from "./GameDifficulty.module.scss";

import SelectDiff from "../../assets/img/difficulty/select.png";
import Diff1 from "../../assets/img/difficulty/diff1.png";
import Diff2 from "../../assets/img/difficulty/diff2.png";
import Diff3 from "../../assets/img/difficulty/diff3.png";

const GameDifficulty: FC<GameProps> = ({
  difficulty,
  onClickLite,
  onClickMiddle,
  onClickHard,
  onClickStartGame,
}) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  useEffect(() => {
    switch (difficulty) {
      case 1: {
        setImgSrc(Diff1);
        break;
      }
      case 2: {
        setImgSrc(Diff2);
        break;
      }
      case 3: {
        setImgSrc(Diff3);
        break;
      }

      default: {
        setImgSrc(SelectDiff);
        break;
      }
    }
  }, [difficulty]);

  return (
    <section className={styles.gameDifficulty}>
      <h4>Выберите сложность:</h4>
      <div>
        <button className={styles.difficultyBtn} onClick={onClickLite}>
          Легко
        </button>
        <button className={styles.difficultyBtn} onClick={onClickMiddle}>
          Средне
        </button>
        <button className={styles.difficultyBtn} onClick={onClickHard}>
          Сложно
        </button>
      </div>
      <div>
        <img
          src={imgSrc}
          alt="Выберите сложность"
          className={styles.difficultyImg}
        />
      </div>
      {difficulty ? (
        <button className={styles.choiсeBtn} onClick={onClickStartGame}>
          играть
        </button>
      ) : (
        ""
      )}
    </section>
  );
};

export default GameDifficulty;
