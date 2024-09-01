import { useEffect, useState } from "react";
import fetchElements from "./api/pokemon.api";
import CardGrid from "./components/CardGrid";

function App() {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetchElements();
      setElements(response);
    };
    fetchPokemon();
  }, []);
  return (
    <>
      <CardGrid elements={elements}></CardGrid>
    </>
  );
}

export default App;
