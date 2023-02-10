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
    <Container className="App__Container">
      <Grid className="grid" container columnGap={10} rowGap={5}>
        {characters.data.map((character) => (
          <Card
            className="character_Card"
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
      </Grid>
    </Container>
  ) : (
    <div className="App">
      <CircularProgress />
    </div>
  );
}
export default App;
