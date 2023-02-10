import React, { useEffect, useState } from "react";
import { CharactersInfo } from "./functions";
import { Card, CircularProgress } from "@mui/material";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      CharactersInfo(setCharacters);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return characters ? (
    <div className="App">
      {characters.data.map((character) => (
        <Card {...character}>
          <img src={character.image} alt="not found" />
          <p>{character.name}</p>
          <p>{character.gender}</p>
          <p>Origin: {character.origin.name}</p>
        </Card>
      ))}
    </div>
  ) : (
    <div className="App">
      <CircularProgress />
    </div>
  );
}
export default App;
