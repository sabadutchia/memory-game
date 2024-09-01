import "../styles/card.css";

export default function Card({ element, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(element.index)}>
      <img src={element.url} alt={element.name} />
      <div className="card-content">
        <h2>{element.name}</h2>
      </div>
    </div>
  );
}
