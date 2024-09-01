import Card from "./Card";

export default function CardGrid({ elements }) {
  let cards = [];
  elements.forEach((element) => {
    cards.push(<Card key={element.index} element={element} />);
  });
  return <div className="card-container">{cards}</div>;
}
