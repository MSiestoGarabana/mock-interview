import axios from "axios";

const CharactersInfo = async (state) => {
  const characters = await axios.get(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6"
  );
  console.log(characters);
  state(characters);
};

export { CharactersInfo };
