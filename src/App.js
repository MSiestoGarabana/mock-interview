import React, { useEffect, useState } from "react";
import { CharactersInfo } from "./functions";
import {
  Card,
  CircularProgress,
  Grid,
  Container,
  Typography,
} from "@mui/material";

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
    <div className="App__Container">
      {characters.data.map((character) => (
        <Card
          className="Card__Character"
          key={character.id}
          {...character}
          raised={true}
        >
          <img src={character.image} alt="not found" />
          <Container className="textContainer" maxWidth="md">
            <Typography variant="h5">{character.name}</Typography>
            <br></br>
            <Typography variant="overline">{character.gender}</Typography>
            <br></br>
            <Typography variant="subtitle1">
              Origin: {character.origin.name}
            </Typography>
          </Container>
        </Card>
      ))}
    </div>
  ) : (
    <div className="App__Container">
      <Card className="Card__loading" raised={true}>
        <CircularProgress />
      </Card>
    </div>
  );
}
export default App;
