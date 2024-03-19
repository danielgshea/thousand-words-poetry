import React from "react";
import theme from "../theme/theme";

const Home: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.background.main,
      }}
    >
      <h1 style={{ margin: "0" }}>Home page</h1>
    </div>
  );
};

export default Home;
