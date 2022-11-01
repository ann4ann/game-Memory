import React from "react";
import Footer from "./components/Footer/Footer";
import GameSection from "./components/GameSection/GameSection";
import Header from "./components/Header/Header";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <GameSection />
      <Footer />
    </div>
  );
}

export default App;
