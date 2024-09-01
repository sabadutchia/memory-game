import { useEffect, useState } from "react";
import fetchElements from "./api/pokemon.api";
import CardGrid from "./components/CardGrid";
import ScoreBoard from "./components/ScoreBoard";
import "./styles/styles.css";

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
    <div className="container">
      <header>
        <div>
          <h1>Pokemon Memory Game</h1>
        </div>
        <ScoreBoard></ScoreBoard>
      </header>
      <CardGrid elements={elements}></CardGrid>
    </div>
  );
}

export default App;
