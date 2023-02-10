import React, { useEffect, useState } from "react";
import { CharactersInfo } from "./functions";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);
  console.log(characters);
  useEffect(() => {
    CharactersInfo(setCharacters);
  }, []);

  return <div>{characters.data[0].name}</div>;
}
export default App;
