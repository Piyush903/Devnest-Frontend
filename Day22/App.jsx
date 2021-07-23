import React, { useState, useEffect } from "react";
import "./App.css";
import Template from "./Template";
import Meme from "./Meme";

function App() {
  const [template, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplate(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h1>Meme Generator</h1>

      {meme === null ? (
        <Template template={template} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
