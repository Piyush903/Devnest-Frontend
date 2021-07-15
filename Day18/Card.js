import "./Card.css";
const Card = (props) => {
  const calcolour = props.value >= 50 ? "green" : "red";
  return (
    <div className="card">
      <div className="cal-colour" style={{ backgroundColor: calcolour }}></div>
      <div className="content">
        <h2>{props.title}</h2>
        <p style={{ color: calcolour, fontWeight: "bold" }}>{props.value}</p>
      </div>
    </div>
  );
};

export default Card;
