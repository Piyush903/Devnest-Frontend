import Card from "./Card";
import "./Container.css";
const Container = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((e) => (
        <Card title={e.title} value={e.value}></Card>
      ))}
    </div>
  );
};

export default Container;
