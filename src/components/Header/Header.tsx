import React from "react";
// import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
        backgroundColor: "#C7D0CC",
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <p>Welcome to my project</p>
      <h1>Game "memory"</h1>
    </header>
  );
};

export default Header;
