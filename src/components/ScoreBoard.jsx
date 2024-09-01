export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score-board">
      <p>
        <strong>Score: </strong>
        {score}
      </p>
      <p>
        <strong>Best score: </strong>
        {bestScore}
      </p>
    </div>
  );
}
