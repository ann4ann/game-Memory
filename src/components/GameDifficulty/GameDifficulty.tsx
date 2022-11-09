import React, { FC, useEffect, useState } from "react";
import { GameProps } from "../../data/gameOptions";
import styles from "./GameDifficulty.module.scss";

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
        setImgSrc(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Pocket_cube_solved.jpg/330px-Pocket_cube_solved.jpg"
        );
        break;
      }
      case 2: {
        setImgSrc(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rubiks_-_Right_Double.svg/459px-Rubiks_-_Right_Double.svg.png"
        );
        break;
      }
      case 3: {
        setImgSrc(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Professor's_Cube_disassembly_0.jpg/220px-Professor's_Cube_disassembly_0.jpg"
        );
        break;
      }

      default: {
        setImgSrc(
          "https://pngimg.com/uploads/question_mark/question_mark_PNG138.png"
        );
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
