import React from "react";
import axios from "axios";
import PoemImages from "../components/PoemImages";
import appTheme from "../theme/theme";
import PoemList from "../components/PoemList";
import { poems } from "../poems/poems";

type poem = {
  title: string,
  author: string,
  content: string
}

const Home: React.FC = () => {

  const analyzePoem = async (content: string) => {
    try {
      console.log(content);
      const input = {
        poem: content,
      }
      const response = await axios.post("http://localhost:4500/analyze-poem", input);
      // setSignificantWords(response.data.significant_words);
    } catch (error) {
      console.error("Error analyzing poem:", error);
    }
  };
  
  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column", backgroundColor: appTheme.palette.background.main }}>
      <div style={{ flex: 0.25, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{color: appTheme.palette.text.tertiary}}>
          Thousand Words Poetry (demo)
        </h1>
      </div>
      <div style={{ display: "flex", flex: 1}} >
          <div style={{ flex: 0.25 }}>
            <PoemList />
          </div>
      </div>
    </div>
  );
};

export default Home;
