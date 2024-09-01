import "../styles/Card.css";

export default function Card({ element }) {
  return (
    <div className="card">
      <img src={element.url} alt={element.name} />
      <div className="card-content">
        <h2>{element.name}</h2>
      </div>
    </div>
  );
}
