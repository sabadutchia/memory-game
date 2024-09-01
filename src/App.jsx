import { useEffect, useState } from "react";
import fetchElements from "./api/pokemon.api";
import CardGrid from "./components/CardGrid";
import ScoreBoard from "./components/ScoreBoard";
import "./styles/styles.css";

function App() {
  const [elements, setElements] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetchElements();
      setElements(response);
    };
    fetchPokemon();
  }, []);

  const incrementScore = (cardIndex) => {
    if (!clickedCards.includes(cardIndex)) {
      setClickedCards([...clickedCards, cardIndex]);
      let newScore = score;
      setScore(++newScore);
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
  };
  return (
    <div className="container">
      <header>
        <div>
          <h1>Pokemon Memory Game</h1>
        </div>
        <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      </header>
      <CardGrid elements={elements} handleClick={incrementScore}></CardGrid>
    </div>
  );
}

export default App;
