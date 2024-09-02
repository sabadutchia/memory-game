import Card from "./Card";

export default function CardGrid({ elements, handleClick }) {
  let cards = [];
  elements.forEach((element) => {
    cards.push(
      <Card
        key={element.index}
        element={element}
        handleClick={() => handleClick(element.index)}
      />
    );
  });
  return <div className="card-container">{cards}</div>;
}
