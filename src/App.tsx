import React, { FC, useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/FooterItem";
import GameSection from "./components/GameSection/GameSection";
import Header from "./components/Header/Header";
import GameDifficulty from "./components/GameDifficulty/GameDifficulty";

const App: FC = () => {
  const [difficulty, setDifficulty] = useState<number>(0);
  const [isGaming, setIsGaming] = useState<boolean>(false);

  const handleClickLite = () => {
    setDifficulty(1);
  };
  const handleClickMiddle = () => {
    setDifficulty(2);
  };
  const handleClickHard = () => {
    setDifficulty(3);
  };
  const handleStartGame = () => {
    setIsGaming(true);
  };
  const handleClickSelectOptions = () => {
    setDifficulty(0);
    setIsGaming(false);
  };
  return (
    <section className={styles.app}>
      <Header />
      {isGaming ? (
        <GameSection
          difficulty={difficulty}
          onClickSelectOptions={handleClickSelectOptions}
        />
      ) : (
        <GameDifficulty
          difficulty={difficulty}
          onClickLite={handleClickLite}
          onClickMiddle={handleClickMiddle}
          onClickHard={handleClickHard}
          onClickStartGame={handleStartGame}
        />
      )}
      <Footer />
    </section>
  );
};

export default App;
