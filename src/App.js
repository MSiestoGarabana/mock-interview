import React, { useEffect, useState } from "react";
import { CharactersInfo } from "./functions";
import "./App.css";

function CharacterCard({ image, name, gender, origin }) {
  return (
    <div>
      <img src={image} alt="not found" />
      <p>{name}</p>
      <p>{gender}</p>
      <p>Origin: {origin.name}</p>
    </div>
  );
}
function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    CharactersInfo(setCharacters);
  }, []);

  return characters === undefined ? (
    <div>loading</div>
  ) : (
    <div className="App">
      {characters.data.map((character) => (
        <CharacterCard {...character} />
      ))}
    </div>
  );
}
export default App;
