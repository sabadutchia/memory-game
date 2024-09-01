import axios from "axios";
import { shuffleArray } from "../helpers/array.helper";

const fetchElements = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=15"
  );
  const pokemonResponse = response.data.results;

  const pokemonElements = await Promise.all(
    pokemonResponse.map(async (item, index) => {
      const { data } = await axios.get(item.url);
      return { name: item.name, url: data.sprites.front_default, index };
    })
  );

  return shuffleArray(pokemonElements);
};

export default fetchElements;
