import React from "react";
import "./Component.css";

export default function Components(props) {
  const { title, values, deleteComponent } = props;
  return (
    <div className="components">
      <h1>{props.title}</h1>
      <button onClick={() => deleteComponent(title)}>Delete</button>
      <h2>Your marks in this subject is {props.values}</h2>
    </div>
  );
}
