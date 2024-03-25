import React from "react";
import theme from "../theme/theme";

const Home: React.FC = () => {


  return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1 }}>
          <div style={{ height: "100%", backgroundColor: "red" }}>
            row 1 col 1
            <div style={{ height: "100%", backgroundColor: "blue" }}></div>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          {/* Row 2 */}
          <div style={{ flex: 1, backgroundColor: "green" }}>
            row 2 col 1
            <div style={{ height: "100%", backgroundColor: "yellow" }}></div>
          </div>
          <div style={{ flex: 4, backgroundColor: "orange" }}>
            row 2 col 2
            <div style={{ height: "100%", backgroundColor: "purple" }}></div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {/* Row 3 */}
          <div style={{ height: "100%", backgroundColor: "pink" }}>row 3</div>
        </div>
      </div>
  );
};

export default Home;
