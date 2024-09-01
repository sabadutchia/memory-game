import "../styles/Card.css";

export default function Card({ element }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={element.url} alt={element.title} />
        <div className="card-content">
          <h2>{element.title}</h2>
        </div>
      </div>
    </div>
  );
}
