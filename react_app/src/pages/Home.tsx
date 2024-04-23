import React from "react";
import axios from "axios";
import PoemImages from "../components/PoemImages";
import appTheme from "../theme/theme";
import PoemList from "../components/PoemList";
import { poems, poem } from "../poems/poems";

const Home: React.FC = () => {

  // get poetry and significant words
  const [poem, setPoem] = React.useState<poem>(poems[0]);
  const [significantWords, setSignificantWords] = React.useState<string[]>([]);

  const handleLoadPoem = async (poem: poem) => {
    setPoem(poem);
    await analyzePoem(poem.content);
  }

  const analyzePoem = async (content: string) => {
    try {
      console.log(content);
      const input = {
        poem: content,
      }
      const response = await axios.post("http://localhost:5000/analyze-poem", input);
      setSignificantWords(response.data.significant_words);
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
            <PoemList handleSet={handleLoadPoem} />
          </div>
          <div style={{ flex: 0.75, backgroundColor: appTheme.palette.color1, padding: "2em" }}>
            <h3>{poem.title}</h3>
            <h5>{poem.author}</h5>
            <p style={{whiteSpace: "pre-wrap"}}><pre>{poem.content}</pre></p>
            <ul>
              {significantWords.map(word => {
                return (
                  <li>{word}</li>
                )
              })}
            </ul>
            <PoemImages keywords={significantWords}/>
          </div>
      </div>
    </div>
  );
};

export default Home;
